import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StartGamePageRoutingModule } from './start-game-routing.module';
import { StartGamePage } from './start-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartGamePageRoutingModule
  ],
  declarations: [StartGamePage] // Remova `entryComponents` se está usando Angular 9+
})
export class StartGamePageModule {}
