import { LanguageSwitchInterface } from "./language-switch.service";

export class LanguageSwitchServiceMock implements LanguageSwitchInterface {
  public isActive(): boolean {
    return true;
  }

  public getEssentialUrl(): string {
    return "";
  }

  public getPrefix(): string {
    return "";
  }

  public getFullUrl(): string {
    return "";
  }
}
