export interface AppEnvironment {
  production: boolean;
  multilang: boolean;
  dateBeginning: string;
  trackingEventTimeout: number;
  features: {
    showWhatIStandFor: boolean;
  };
  featuresUrl: string;
}
