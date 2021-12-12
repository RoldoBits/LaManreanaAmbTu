import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-causa-efecte',
  templateUrl: './causa-efecte.page.html',
  styleUrls: ['./causa-efecte.page.scss'],
})
export class CausaEfectePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  toPage(page) {
    console.log("changeto: "+ page);
    
    this.route.navigate([page]);
  }

}
