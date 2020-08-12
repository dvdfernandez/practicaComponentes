import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  searchString: string = '';

  constructor( private _dataSrv: DataService) { }

  ngOnInit() {
    this._dataSrv.getAlbumes().subscribe ( (data) => {
      this.albumes = data;
      // console.log(this.albumes);
      
    });
  }

  searchChange( e ) {
    // console.log(e.detail.value);
    this.searchString = e.detail.value;
    
  }

}
