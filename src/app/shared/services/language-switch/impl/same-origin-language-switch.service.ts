import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchService } from "../language-switch.service";

type PrefixMapping = { [key in LanguageType]: string };

export class SameOriginLanguageSwitchService extends LanguageSwitchService {
  public constructor(private readonly mapping: PrefixMapping) {
    super();
  }

  public isActive(fullPath: string, language: LanguageType): boolean {
    const url = new URL(fullPath);
    const prefix = this.mapping[language];

    return url.pathname.startsWith(`${prefix}/`);
  }

  public getEssentialUrl(fullPath: string): string {
    const url = new URL(fullPath);
    const path = this.getEssentialPath(url.pathname);

    return `${path}${url.search}${url.hash}`;
  }

  public getPrefix(language: LanguageType): string {
    return this.mapping[language];
  }

  public getFullUrl(language: LanguageType, essentialPath: string): string {
    return `${this.mapping[language]}${essentialPath}`;
  }

  private getEssentialPath(path: string): string {
    const pos = path.replace(/^\//, "").indexOf("/");

    if (pos === -1 || pos === path.length - 1) {
      return "/";
    }

    return path.substring(pos + 1, path.length);
  }
}
