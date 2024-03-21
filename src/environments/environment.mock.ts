// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppEnvironment } from "@/models/app-environment.interface";

export const mockEnvironment: AppEnvironment = {
  production: true,
  debugTracking: false,
  languages: {
    isMultiOrigin: true,
    enOrigin: "",
    ruOrigin: "",
  },
  dateBeginning: "June 17, 2017 00:00:00",
  trackingEventTimeout: 0,
  featuresUrl: "",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
