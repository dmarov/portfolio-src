import { LanguageType } from "@/models/lang/language-type.enum";
import { LanguageSwitchInterface } from "./language-switch.interface";

type PrefixMapping = { [key in LanguageType]: string };

export class SameOriginLanguageSwitchService
  implements LanguageSwitchInterface
{
  public constructor(private readonly mapping: PrefixMapping) {}

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

  public getFullUrl(language: LanguageType, essentialUrl: string): string {
    return `${this.mapping[language]}${essentialUrl}`;
  }

  private getEssentialPath(path: string): string {
    const pos = path.replace(/^\//, "").indexOf("/");

    if (pos === -1 || pos === path.length - 1) {
      return "/";
    }

    return path.substring(pos + 1, path.length);
  }
}
