import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddQuestionsPage } from './add-questions.page';  // Corrigir o caminho aqui

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AddQuestionsPage }])
  ],
  declarations: [AddQuestionsPage]
})
export class AddQuestionsPageModule {}