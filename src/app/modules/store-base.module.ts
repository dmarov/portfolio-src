import { StoreModule } from '@ngrx/store';

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
    ],
    imports: [
        StoreModule.forRoot({}, {}),
    ],
})
export class StoreBaseModule {};
