import { TestBed } from "@angular/core/testing";
import { LanguageType } from "@/app/models/lang/language-type.enum";
import { LanguageSwitchService } from "../language-switch.service";
import { MultiOriginLanguageSwitchService } from "./multi-origin-language-switch.service";

describe("MultiOriginLanguageSwitchService", () => {
  let service: LanguageSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LanguageSwitchService,
          useValue: new MultiOriginLanguageSwitchService({
            [LanguageType.English]: "https://en.origin.com",
            [LanguageType.Russian]: "https://ru.origin.com",
          }),
        },
      ],
    });

    service = TestBed.inject(LanguageSwitchService);
  });

  it("should return false if path doesn't match language", () => {
    const res = service.isActive(
      "https://en.origin.com/path-to-page",
      LanguageType.Russian,
    );

    expect(res).toEqual(false);
  });

  it("should return true if path matches language", () => {
    const res = service.isActive(
      "https://en.origin.com/path-to-page",
      LanguageType.English,
    );

    expect(res).toEqual(true);
  });

  it("should return essential path same as provided path", () => {
    const res = service.getEssentialUrl("https://en.origin.com/path-to-page");

    expect(res).toEqual("/path-to-page");
  });

  it("should return essential path with search query", () => {
    const res = service.getEssentialUrl(
      "https://en.origin.com/path-to-page?q=1",
    );

    expect(res).toEqual("/path-to-page?q=1");
  });

  it("should return essential path with hash", () => {
    const res = service.getEssentialUrl(
      "https://en.origin.com/path-to-page#hash",
    );

    expect(res).toEqual("/path-to-page#hash");
  });
});
