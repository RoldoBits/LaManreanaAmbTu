import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  toPage(page) {
    console.log("changeto: "+ page);
    
    this.route.navigate([page]);
  }


}
