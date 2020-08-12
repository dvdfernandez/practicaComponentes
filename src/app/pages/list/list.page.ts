import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: any;

  constructor( private _dataSrv: DataService,
               private toastCtrl: ToastController) { }

  ngOnInit() {
    this._dataSrv.getUsers().subscribe( (data) => {
      this.usuarios = data;
      console.log(this.usuarios);
      
    });
    }
    
    async presentToast( message: string) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
        position: 'top',
      });
      toast.present();
    }

  favorite(user: any) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
    this.presentToast('Marcado como favorito');
    
  }


  share(user: any) {
    console.log('share', user);
    this.lista.closeSlidingItems();
    this.presentToast('Compartido correctamente');
    
  }

  unread(user: any) {
    console.log('unread', user);
    this.lista.closeSlidingItems();
    this.presentToast('Marcado como no leído');
    
  }


}
