import { AppEnvironment } from "@/app/models/app-environment.interface";

export const environment: AppEnvironment = {
  production: true,
  multilang: true,
  features: {
    robotsMangoOfficeEnabled: false,
  },
};
