import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RobotsMangoOfficeComponent } from "./robots-mango-office.component";

@Component({
  selector: "app-counter-input-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-robots-mango-office></app-robots-mango-office>`,
})
export class RobotsMangoOfficeTestComponent {}

describe("RobotsMangoOfficeComponent", () => {
  let fixture: ComponentFixture<RobotsMangoOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RobotsMangoOfficeComponent],
    });
    fixture = TestBed.createComponent(RobotsMangoOfficeComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="robots-mango-office"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});