export interface AppEnvironment {
  production: boolean;
  languageRefs: {
    en: string;
    ru: string;
  };
  dateBeginning: string;
  trackingEventTimeout: number;
  featuresUrl: string;
}
