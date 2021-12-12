import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrencaColosquesPageRoutingModule } from './trenca-colosques-routing.module';

import { TrencaColosquesPage } from './trenca-colosques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrencaColosquesPageRoutingModule
  ],
  declarations: [TrencaColosquesPage]
})
export class TrencaColosquesPageModule {}
