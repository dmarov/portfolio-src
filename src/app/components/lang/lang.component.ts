import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lang',
    templateUrl: './lang.component.html',
})
export class LangComponent implements OnInit {

    isEn = false;
    isRu = false;

    constructor() { }

    ngOnInit(): void {
        this.isEn = window.location.pathname.startsWith("/en");
        this.isRu = window.location.pathname.startsWith("/ru");
    }
}
