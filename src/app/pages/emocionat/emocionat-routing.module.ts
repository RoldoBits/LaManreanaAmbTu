import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmocionatPage } from './emocionat.page';

const routes: Routes = [
  {
    path: '',
    component: EmocionatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmocionatPageRoutingModule {}
