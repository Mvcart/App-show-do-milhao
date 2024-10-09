import { Component } from '@angular/core';
import { QuestionService } from '../services/question.service';  // Certifique-se de que este caminho esteja correto
import { Question } from '../models/question';  // Certifique-se de que o modelo esteja correto e disponível

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.page.html',
  styleUrls: ['./manage-questions.page.scss'],
})
export class ManageQuestionsPage {
  questions: Question[] = [];  // Certifique-se de usar o tipo correto

  constructor(private questionService: QuestionService) {
    // Carrega as perguntas ao iniciar o componente
    this.questions = this.questionService.getQuestions();
  }

  // Função para adicionar uma nova pergunta
  addQuestion() {
    const newQuestion: Question = {
      title: 'Nova pergunta',
      answers: [
        { description: 'Resposta 1', isRight: false },
        { description: 'Resposta correta', isRight: true },
        { description: 'Resposta 3', isRight: false }
      ],
      level: 1  // Pode ajustar o nível conforme necessário
    };

    // Adiciona a pergunta e atualiza a lista de perguntas
    this.questionService.addQuestion(newQuestion).then(() => {
      this.questions = this.questionService.getQuestions();  // Atualiza a lista após adicionar
    });
  }

  // Função para deletar uma pergunta com base no índice
  deleteQuestion(index: number) {
    this.questionService.deleteQuestion(index);
    this.questions = this.questionService.getQuestions();  // Atualiza a lista após excluir
  }
}