import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { Heroe } from '../../interfaces/heroes';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<Heroe[]>;
  publisher: string = '';

  constructor( private _dataSrv: DataService) { }

  ngOnInit() {

    this.heroes = this._dataSrv.getHeroes();
  }

  segmentChanged( e ) {

    this.publisher = e.detail.value;

  }

}
