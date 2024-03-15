import { LanguageSwitchInterface } from "./language-switch.interface";

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
