import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { Features } from "@/app/models/features/features.class";
import { AboutMeComponent } from "./about-me.component";

@Component({
  selector: "app-about-me-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-about-me></app-about-me>",
  imports: [AboutMeComponent],
})
export class AboutMeTestComponent {}

describe("AboutMeComponent", () => {
  let fixture: ComponentFixture<AboutMeTestComponent>;
  mockIntersectionObserver();

  const mockFeatures: Features = {
    SHOW_WHAT_I_STAND_FOR: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Features,
          useValue: mockFeatures,
        },
      ],
    });

    fixture = TestBed.createComponent(AboutMeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="about-me"]') as HTMLElement;

    expect(el).toBeTruthy();
  });
});
