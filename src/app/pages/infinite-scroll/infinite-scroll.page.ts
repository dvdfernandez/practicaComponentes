import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(30);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {
    setTimeout(() => {
      const newArray = Array(30);
      this.data.push(...newArray);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 90) {
        event.target.disabled = true;
      }
    }, 1000);
  }

}
