import { AppEnvironment } from "@/app/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: true,
  multilang: true,
  dateBeginning: "June 17, 2017 00:00:00",
  trackingEventTimeout: 1000,
  featuresUrl:
    "https://gist.githubusercontent.com/dmarov/865906fdd48c581b931f6e2c23954787/raw/dmarov-features.json",
};
