import { LanguageSwitchService } from "./language-switch.service";

export class LanguageSwitchServiceMock extends LanguageSwitchService {
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
