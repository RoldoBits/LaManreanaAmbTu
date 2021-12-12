import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { MenuListComponent } from './menu-list/menu-list.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MemoryComponent } from './pages/memory/memory.component';
import { Memoryv2Page } from './pages/memoryv2/memoryv2.page';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    
  ],
  declarations: [AppComponent, MenuListComponent,MemoryComponent, Memoryv2Page],
  bootstrap: [AppComponent]
})
export class AppModule {}
