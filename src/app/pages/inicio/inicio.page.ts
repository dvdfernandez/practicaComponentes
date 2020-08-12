import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

// Interfaces
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private menuCtl: MenuController,
               private _dataSrv: DataService){ }

  ngOnInit() { 
    this.componentes = this._dataSrv.getMenu();
  }

  toggleMenu() {
    this.menuCtl.toggle();
  }

}


