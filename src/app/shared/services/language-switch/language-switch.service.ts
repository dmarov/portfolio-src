import { LanguageType } from "@/app/models/lang/language-type.enum";

export abstract class LanguageSwitchService {
  public abstract isActive(fullPath: string, language: LanguageType): boolean;

  public abstract getEssentialUrl(fullPath: string): string;

  public abstract getPrefix(language: LanguageType): string;
}
