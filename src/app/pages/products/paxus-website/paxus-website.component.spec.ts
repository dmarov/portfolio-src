import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaxusWebsiteComponent } from "./paxus-website.component";

@Component({
  selector: "app-paxus-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-paxus-website></app-paxus-website>",
  imports: [PaxusWebsiteComponent],
})
export class PaxusWebsiteTestComponent {}

describe("PaxusWebsiteComponent", () => {
  let fixture: ComponentFixture<PaxusWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(PaxusWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="paxus-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
