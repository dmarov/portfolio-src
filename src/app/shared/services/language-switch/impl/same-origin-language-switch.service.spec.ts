import { TestBed } from "@angular/core/testing";
import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchService } from "../language-switch.service";
import { SameOriginLanguageSwitchService } from "./same-origin-language-switch.service";

describe("MultiOriginLanguageSwitchService", () => {
  let service: LanguageSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LanguageSwitchService,
          useValue: new SameOriginLanguageSwitchService({
            [LanguageType.English]: "/en",
            [LanguageType.Russian]: "/ru",
          }),
        },
      ],
    });

    service = TestBed.inject(LanguageSwitchService);
  });

  it("should return false if path doesn't match language", () => {
    const res = service.isActive(
      "https://origin.com/en/path-to-page",
      LanguageType.Russian,
    );

    expect(res).toEqual(false);
  });

  it("should return false if path not ending with slash", () => {
    const res = service.isActive(
      "https://origin.com/ru-page",
      LanguageType.Russian,
    );

    expect(res).toEqual(false);
  });

  it("should return true if path matches language", () => {
    const res = service.isActive(
      "https://origin.com/en/path-to-page",
      LanguageType.English,
    );

    expect(res).toEqual(true);
  });

  it("should return essential path without prefix for root page", () => {
    const res = service.getEssentialUrl("https://en.origin.com/en/");

    expect(res).toEqual("/");
  });

  it("should return essential path without prefix for other pages", () => {
    const res = service.getEssentialUrl("https://origin.com/en/path-to-page");

    expect(res).toEqual("/path-to-page");
  });

  it("should return essential path with search string", () => {
    const res = service.getEssentialUrl(
      "https://origin.com/en/path-to-page?q=1",
    );

    expect(res).toEqual("/path-to-page?q=1");
  });

  it("should return essential path with hash", () => {
    const res = service.getEssentialUrl(
      "https://origin.com/en/path-to-page#hash",
    );

    expect(res).toEqual("/path-to-page#hash");
  });

  it("should return full path", () => {
    const res = service.getFullUrl(LanguageType.English, "/path-to-page");

    expect(res).toEqual("/en/path-to-page");
  });
});
