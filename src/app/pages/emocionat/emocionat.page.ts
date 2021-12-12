import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emocionat',
  templateUrl: './emocionat.page.html',
  styleUrls: ['./emocionat.page.scss'],
})
export class EmocionatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  toPage(page) {
    console.log("changeto: "+ page);
    
    this.route.navigate([page]);
  }

}
