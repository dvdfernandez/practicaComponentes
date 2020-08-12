import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public form = [
    { name: 'primary', isChecked: true },
    { name: 'secondary', isChecked: false },
    { name: 'tertiary', isChecked: true },
    { name: 'success', isChecked: false },

  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( e: any ) {
    console.log(e);
    

  }
}
