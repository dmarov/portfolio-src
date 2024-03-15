import { LanguageType } from "@/app/models/lang/language-type.enum";

export interface LanguageSwitchInterface {
  isActive(fullPath: string, language: LanguageType): boolean;

  getEssentialUrl(fullPath: string): string;

  getFullUrl(language: LanguageType, essentialUrl: string): string;
}
