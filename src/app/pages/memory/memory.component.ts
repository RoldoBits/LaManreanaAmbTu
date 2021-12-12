import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemHeightFn } from '@ionic/core';
import { ReturnStatement } from '@angular/compiler';
@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
})
export class MemoryComponent implements OnInit {
  test: string 
  public item: Item;
  constructor(private route: Router) { 
    this.test = "Hola em dic Ivan";
  }
  ngAfterViewInit(){

  }


  ngOnInit(
    
  ) {

  }


  toPage(page) {
    console.log("changeto: "+ page);
    
    this.route.navigate([page]);
  }


}

export class Item {
  constructor(public src: string) {
    this.src = "/assets/img/carta.png"
  }
}