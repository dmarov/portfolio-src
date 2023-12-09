import { AppEnvironment } from "@/app/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: true,
  multilang: true,
  dateBeginning: "June 17, 2017 00:00:00",
  trackingEventTimeout: 1000,
  features: {
    showWhatIStandFor: false,
  },
};
