import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() endingType: string; // 'quit', 'wrongAnswer', 'win'
  @Input() numeroQuestoes: number; // Quantidade de questões para o reset

  constructor(
    private questionService: QuestionService,
    private navCtrl: NavController, 
    private modalCtrl: ModalController 
  ) {}

  get prizeWon() {
    return this.questionService.getPrizeInfo()[this.endingType];
  }

  ngOnInit(): void {
    console.log('Prize Info:', this.questionService.getPrizeInfo());
    console.log('Número de Questões:', this.numeroQuestoes); // Adiciona um log para depuração
  }

  async iniciarNovoJogo() {
    this.questionService.resetGame(this.numeroQuestoes); // Passa o número de questões ao resetar
  
    // Verifica se o modal está ativo antes de fechá-lo
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      await this.modalCtrl.dismiss();
    }
  
    // Redireciona para a página de início do jogo
    this.navCtrl.navigateRoot('/start-game').catch(err => {
      console.error('Erro na navegação para /startquestion:', err);
    });
  }  
  
  async irParaMenu() {
    this.questionService.resetGame(this.numeroQuestoes); // Passa o número de questões ao resetar
  
    // Verifica se o modal está ativo antes de fechá-lo
    const modal = await this.modalCtrl.getTop();
    if (modal) {
      await this.modalCtrl.dismiss();
    }
  
    // Redireciona para o menu principal
    this.navCtrl.navigateRoot('/menu').catch(err => {
      console.error('Erro na navegação para /menu:', err);
    });
  }  
}