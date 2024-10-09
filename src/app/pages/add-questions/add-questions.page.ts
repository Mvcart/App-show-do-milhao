import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { QuestionAnswer } from '../../models/question';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.page.html',
  styleUrls: ['./add-questions.page.scss'],
})
export class AddQuestionsPage {
  question = {
    title: '',
    correctAnswer: '',
    answers: [
      { description: '', isRight: false },
      { description: '', isRight: false },
      { description: '', isRight: false }
    ]
  };

  constructor(
    private questionService: QuestionService,
    private navCtrl: NavController, 
    private modalCtrl: ModalController
  ) {}

  saveQuestion() {
    // Marcando a resposta correta
    const correctIndex = parseInt(this.question.correctAnswer, 10);
    if (!isNaN(correctIndex) && correctIndex >= 0 && correctIndex < this.question.answers.length) {
      this.question.answers.forEach((answer, index) => {
        answer.isRight = (index === correctIndex);
      });

      this.questionService.addQuestion(this.question).then(() => {
        alert('Pergunta adicionada com sucesso');
      }).catch(err => {
        console.error('Erro ao adicionar pergunta:', err);
        alert('Erro ao adicionar pergunta');
      });
    } else {
      alert('Índice da resposta correta inválido');
    }
  }

  async irParaMenu() {
    try {
      await this.questionService.resetGame(); // Reseta o estado do jogo, incluindo o prêmio
      this.navCtrl.navigateRoot('/menu'); // Navega para o menu principal
    } catch (err) {
      console.error('Erro ao resetar o jogo:', err);
      alert('Erro ao ir para o menu');
    }
  }
  
}