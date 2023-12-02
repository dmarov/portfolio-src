import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RivertvWebsiteComponent } from "./rivertv-website.component";

@Component({
  selector: "app-rivertv-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-rivertv-website></app-rivertv-website>`,
  imports: [RivertvWebsiteComponent],
})
export class RivertvWebsiteTestComponent {}

describe("RivertvWebsiteComponent", () => {
  let fixture: ComponentFixture<RivertvWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(RivertvWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="rivertv-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
