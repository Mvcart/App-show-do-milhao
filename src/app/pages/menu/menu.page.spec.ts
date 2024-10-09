import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the "Jogar" page on click', () => {
    spyOn(component['navCtrl'], 'navigateForward');

    component.toQuestion();

    expect(component['navCtrl'].navigateForward).toHaveBeenCalledWith('/question');
  });

  it('should navigate to the "Editar Perguntas" page on click', () => {
    spyOn(component['navCtrl'], 'navigateForward');

    component.toEditQuestions();

    expect(component['navCtrl'].navigateForward).toHaveBeenCalledWith('/add-questions');
  });
});