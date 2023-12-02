import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { HomeComponent } from "./home.component";

@Component({
  selector: "app-home-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-home></app-home>",
  imports: [HomeComponent],
})
export class HomeTestComponent {}

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomeTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="home"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
