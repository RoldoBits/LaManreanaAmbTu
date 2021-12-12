import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Memoryv2Page } from './memoryv2.page';

const routes: Routes = [
  {
    path: '',
    component: Memoryv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Memoryv2PageRoutingModule {}
