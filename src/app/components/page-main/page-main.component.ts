import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-main',
    templateUrl: './page-main.component.html',
    styleUrls: ['./page-main.component.scss'],
    host: {
        class: 'app-layout__content-wrapper',
    },
})
export class PageMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
