import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ScarlettAndMonarchCmsComponent } from "./scarlett-and-monarch-cms.component";

@Component({
  selector: "app-scarlett-and-monarch-cms-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-scarlett-and-monarch-cms></app-scarlett-and-monarch-cms>",
  imports: [ScarlettAndMonarchCmsComponent],
})
export class ScarlettAndMonarchCmsTestComponent {}

describe("ScarlettAndMonarchCmsComponent", () => {
  let fixture: ComponentFixture<ScarlettAndMonarchCmsTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(ScarlettAndMonarchCmsTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector(
      '[data-test="scarlett-and-monarch-cms"]',
    ) as HTMLElement;

    expect(el).toBeTruthy();
  });
});
