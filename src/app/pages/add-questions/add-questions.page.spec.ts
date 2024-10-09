import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddQuestionsPage } from './add-questions.page';
import { QuestionService } from '../../services/question.service';
import { of } from 'rxjs';

describe('AddQuestionsPage', () => {
  let component: AddQuestionsPage;
  let fixture: ComponentFixture<AddQuestionsPage>;
  let questionServiceSpy: jasmine.SpyObj<QuestionService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('QuestionService', ['addQuestion']);

    await TestBed.configureTestingModule({
      declarations: [AddQuestionsPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: QuestionService, useValue: spy }
      ]
    }).compileComponents();

    questionServiceSpy = TestBed.get(QuestionService) as jasmine.SpyObj<QuestionService>;
    questionServiceSpy.addQuestion.and.returnValue(Promise.resolve());

    fixture = TestBed.createComponent(AddQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveQuestion and show alert on success', async () => {
    spyOn(window, 'alert');

    component.question = {
      title: 'Sample Question',
      correctAnswer: '0',
      answers: [
        { description: 'Answer 1', isRight: false },
        { description: 'Answer 2', isRight: false },
        { description: 'Answer 3', isRight: false }
      ]
    };

    await component.saveQuestion();

    expect(questionServiceSpy.addQuestion).toHaveBeenCalledWith(component.question);
    expect(window.alert).toHaveBeenCalledWith('Pergunta adicionada com sucesso');
  });

  it('should mark the correct answer correctly', () => {
    component.question = {
      title: 'Sample Question',
      correctAnswer: '1',
      answers: [
        { description: 'Answer 1', isRight: false },
        { description: 'Answer 2', isRight: false },
        { description: 'Answer 3', isRight: false }
      ]
    };

    component.saveQuestion();

    expect(component.question.answers[0].isRight).toBe(false);
    expect(component.question.answers[1].isRight).toBe(true);
    expect(component.question.answers[2].isRight).toBe(false);
  });
});