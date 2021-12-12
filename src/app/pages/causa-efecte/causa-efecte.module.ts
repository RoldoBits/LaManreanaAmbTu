import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CausaEfectePageRoutingModule } from './causa-efecte-routing.module';

import { CausaEfectePage } from './causa-efecte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CausaEfectePageRoutingModule
  ],
  declarations: [CausaEfectePage]
})
export class CausaEfectePageModule {}
