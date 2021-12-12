import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrencaColosquesPage } from './trenca-colosques.page';

const routes: Routes = [
  {
    path: '',
    component: TrencaColosquesPage
  }
];

@NgModule({

  exports: [RouterModule],
})
export class TrencaColosquesPageRoutingModule {}
