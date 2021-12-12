import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImatgesPageRoutingModule } from './imatges-routing.module';

import { ImatgesPage } from './imatges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImatgesPageRoutingModule
  ],
  declarations: [ImatgesPage]
})
export class ImatgesPageModule {}
