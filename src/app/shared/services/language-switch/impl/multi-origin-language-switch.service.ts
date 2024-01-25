import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchService } from "../language-switch.service";

type OriginMapping = { [key in LanguageType]: string };

export class MultiOriginLanguageSwitchService extends LanguageSwitchService {
  public constructor(private readonly mapping: OriginMapping) {
    super();
  }

  public isActive(fullPath: string, language: LanguageType): boolean {
    const url = new URL(fullPath);

    return this.mapping[language] === url.origin;
  }

  public getEssentialUrl(fullPath: string): string {
    const url = new URL(fullPath);

    return `${url.pathname}${url.search}${url.hash}`;
  }

  public getFullUrl(language: LanguageType, essentialPath: string): string {
    return `${this.mapping[language]}${essentialPath}`;
  }
}
