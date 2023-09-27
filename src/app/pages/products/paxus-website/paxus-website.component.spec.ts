import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaxusWebsiteComponent } from "./paxus-website.component";

@Component({
  selector: "app-paxus-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-paxus-website></app-paxus-website>`,
})
export class PaxusWebsiteTestComponent {}

describe("PaxusWebsiteComponent", () => {
  let fixture: ComponentFixture<PaxusWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaxusWebsiteComponent],
    });
    fixture = TestBed.createComponent(PaxusWebsiteComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="paxus-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
