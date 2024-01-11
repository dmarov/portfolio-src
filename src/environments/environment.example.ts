// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppEnvironment } from "@/app/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: false,
  multilang: false,
  dateBeginning: "June 17, 2017 00:00:00",
  trackingEventTimeout: 1000,
  featuresUrl:
    "https://gist.githubusercontent.com/dmarov/07bf14d8ef903c940e58bb4950b315f3/raw/dmarov-features-dev.json",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.