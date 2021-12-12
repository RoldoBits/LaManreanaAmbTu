import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageModule } from './menu/menu.module';
import {
  CommonModule
} from '@angular/common';
import { MemoryComponent } from './pages/memory/memory.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ImatgesPage } from './pages/imatges/imatges.page';
import { CausaEfectePage } from './pages/causa-efecte/causa-efecte.page';
import { EmocionatPage } from './pages/emocionat/emocionat.page';
import { BookPage } from './pages/book/book.page';
import { TrencaColosquesPage } from './pages/trenca-colosques/trenca-colosques.page';
import { Memoryv2Page } from './pages/memoryv2/memoryv2.page';


const route: Routes = [
  { path: 'home',   component:MenuListComponent },
  { path: 'imatges',   component:ImatgesPage },
  { path: 'causa-efecte',   component:CausaEfectePage },
  { path: 'emocionat',   component:EmocionatPage },
  { path: 'book',   component:BookPage },
  { path: 'memory', component:Memoryv2Page },
  { path: 'memoryv2', component:Memoryv2Page },
  { path: 'trencaclosques', component:TrencaColosquesPage },
  { path: '',   component:MenuListComponent },
  { path: '**',   redirectTo:'home' },  
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

