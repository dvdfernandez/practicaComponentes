import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  nacimiento: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  muestraFecha( e: any ) {
    console.log(e);
    
  }

}
