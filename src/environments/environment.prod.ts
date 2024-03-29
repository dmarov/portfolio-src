import { AppEnvironment } from "@/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: true,
  debugTracking: false,
  languages: {
    isMultiOrigin: false,
    enPrefix: "/en",
    ruPrefix: "/ru",
  },
  featuresUrl:
    "https://gist.githubusercontent.com/dmarov/865906fdd48c581b931f6e2c23954787/raw/dmarov-features.json",
};
