import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { tap } from "rxjs/operators";

@Injectable()
export class RouterEffects {

    constructor(
        private readonly actions$: Actions,
    ) { }

    onNavigated$ = createEffect(
        () => this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            tap(() => {
                console.log("HERE");
            }),
        ),
        { dispatch: false }
    );
}
