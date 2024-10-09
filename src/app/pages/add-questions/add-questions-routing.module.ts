import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsPage } from './add-questions.page';

const routes: Routes = [
  {
    path: '',
    component: AddQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddQuestionsRoutingModule { }