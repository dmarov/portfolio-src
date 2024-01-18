import { LanguageType } from "@/app/models/lang/language-type.enum";
import { environment } from "@/environments/environment";
import { MultiOriginLanguageSwitchService } from "../services/language-switch/impl/multi-origin-language-switch.service";
import { SameOriginLanguageSwitchService } from "../services/language-switch/impl/same-origin-language-switch.service";
import { LanguageSwitchService } from "../services/language-switch/language-switch.service";

export const languageSwitchServiceFactory = (): LanguageSwitchService => {
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
