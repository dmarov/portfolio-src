import { AppEnvironment } from "@/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: false,
  debugTracking: true,
  languages: {
    isMultiOrigin: true,
    enOrigin: "http://localhost:4200",
    ruOrigin: "http://localhost:4201",
  },
  featuresUrl:
    "https://gist.githubusercontent.com/dmarov/07bf14d8ef903c940e58bb4950b315f3/raw/dmarov-features-dev.json",
};
