import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/component/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      mode: 'ios',
      translucent: true,
      backdropDismiss: false
    });
    
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log('Ha devuelto:', data);
    
  }

}
