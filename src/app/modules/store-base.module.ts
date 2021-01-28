import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],

})
export class StoreBaseModule {};
