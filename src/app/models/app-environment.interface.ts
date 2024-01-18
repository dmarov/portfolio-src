type SameOriginLang = {
  isMultiOrigin: false;
  enPrefix: string;
  ruPrefix: string;
};

type MultiOriginLang = {
  isMultiOrigin: true;
  enOrigin: string;
  ruOrigin: string;
};

export interface AppEnvironment {
  production: boolean;
  debugTracking: boolean;
  languages: SameOriginLang | MultiOriginLang;
  dateBeginning: string;
  trackingEventTimeout: number;
  featuresUrl: string;
}
