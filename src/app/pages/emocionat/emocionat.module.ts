import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmocionatPageRoutingModule } from './emocionat-routing.module';

import { EmocionatPage } from './emocionat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmocionatPageRoutingModule
  ],
  declarations: [EmocionatPage]
})
export class EmocionatPageModule {}
