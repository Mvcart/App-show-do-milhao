import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) }, // Página de login não protegida
  
  // Rotas protegidas
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'question',
    loadChildren: () => import('./pages/question/question.module').then(m => m.QuestionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'primeira-pergunta',
    loadChildren: () => import('./pages/question/question.module').then(m => m.QuestionPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-questions',
    loadChildren: () => import('./pages/add-questions/add-questions.module').then(m => m.AddQuestionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ending',
    loadChildren: () => import('./pages/ending/ending.module').then(m => m.EndingPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manage-questions',
    loadChildren: () => import('./manage-questions/manage-questions.module').then(m => m.ManageQuestionsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'start-game',
    loadChildren: () => import('./pages/start-game/start-game.module').then( m => m.StartGamePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }