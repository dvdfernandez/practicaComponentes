import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() country: string;

  constructor( private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissWith() {
    this._modalCtrl.dismiss({
      dismissed: true
    });
  }

  dismissWithout() {
    this._modalCtrl.dismiss();
  }
  
}
