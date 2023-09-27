import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { KemerovoWebsiteComponent } from "./kemerovo-website.component";

@Component({
  selector: "app-kemerovo-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-kemerovo-website></app-kemerovo-website>`,
})
export class KemerovoWebsiteTestComponent {}

describe("KemerovoWebsiteComponent", () => {
  let fixture: ComponentFixture<KemerovoWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KemerovoWebsiteComponent],
    });
    fixture = TestBed.createComponent(KemerovoWebsiteComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="kemerovo-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
