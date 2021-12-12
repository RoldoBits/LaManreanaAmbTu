import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from './modal-add-book/modal-add-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  listNotes: Nota[];
  constructor(private route: Router, public modalCtrl: ModalController) { 
    }




  ngOnInit() {
  console.log("test");

    this.listNotes = [
      new Nota("Sean", "Connery"),
      new Nota("David", "Niven"),
      new Nota("George", "Lazenby"),
      new Nota("Roger", "Moore"),
      new Nota("Timothy", "Dalton"),
      new Nota("Pierce", "Brosnan"),
      new Nota("Daniel", "Craig")
    ];
    console.log(this.listNotes);
    
  }

  toPage(page) {
    console.log("changeto: "+ page);
    
    this.route.navigate([page]);
  }

  modalDataResponse: any;



  async initModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        'name': 'The Winter Soldier'
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }

}

export class Nota {
  constructor(public data: string, public valor: string) {
  }
}
