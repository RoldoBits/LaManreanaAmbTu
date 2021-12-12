import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImatgesPage } from './imatges.page';

const routes: Routes = [
  {
    path: '',
    component: ImatgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImatgesPageRoutingModule {}
