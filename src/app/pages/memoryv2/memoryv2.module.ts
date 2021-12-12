import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Memoryv2PageRoutingModule } from './memoryv2-routing.module';

import { Memoryv2Page } from './memoryv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Memoryv2PageRoutingModule
  ],
  declarations: [Memoryv2Page]
})
export class Memoryv2PageModule {}
