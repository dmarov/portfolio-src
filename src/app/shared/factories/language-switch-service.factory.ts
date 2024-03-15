import { AppEnvironment } from "@/app/models/app-environment.interface";
import { LanguageType } from "@/app/models/lang/language-type.enum";
import { MultiOriginLanguageSwitchService } from "../services/language-switch/multi-origin-language-switch.service";
import { SameOriginLanguageSwitchService } from "../services/language-switch/same-origin-language-switch.service";
import { LanguageSwitchInterface } from "../services/language-switch/language-switch.interface";

export const languageSwitchServiceFactory = (
  environment: AppEnvironment,
): LanguageSwitchInterface => {
  if (environment.languages.isMultiOrigin) {
    return new MultiOriginLanguageSwitchService({
      [LanguageType.English]: environment.languages.enOrigin,
      [LanguageType.Russian]: environment.languages.ruOrigin,
    });
  }

  return new SameOriginLanguageSwitchService({
    [LanguageType.English]: environment.languages.enPrefix,
    [LanguageType.Russian]: environment.languages.ruPrefix,
  });
};
