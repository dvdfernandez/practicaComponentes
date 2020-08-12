import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

// Interfaces
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private _dataSrv: DataService) {

    // this._dataSrv.getMenu().subscribe( console.log );
  }

  ngOnInit() {
    this.componentes = this._dataSrv.getMenu();
  }

}
