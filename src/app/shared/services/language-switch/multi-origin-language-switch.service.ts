import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchInterface } from "./language-switch.interface";

type OriginMapping = { [key in LanguageType]: string };

export class MultiOriginLanguageSwitchService
  implements LanguageSwitchInterface
{
  public constructor(private readonly mapping: OriginMapping) {}

  public isActive(fullPath: string, language: LanguageType): boolean {
    const url = new URL(fullPath);

    return this.mapping[language] === url.origin;
  }

  public getEssentialUrl(fullPath: string): string {
    const url = new URL(fullPath);

    return `${url.pathname}${url.search}${url.hash}`;
  }

  public getFullUrl(language: LanguageType, essentialUrl: string): string {
    return `${this.mapping[language]}${essentialUrl}`;
  }
}
