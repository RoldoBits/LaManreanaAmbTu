import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-add-book.component.html',
  styleUrls: ['./modal-add-book.component.scss'],
})

export class ModalPopoverPage implements OnInit {

  @Input() name: string;

  constructor(
    private modalCtr: ModalController,
  ) { }

  ngOnInit() { }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  

}