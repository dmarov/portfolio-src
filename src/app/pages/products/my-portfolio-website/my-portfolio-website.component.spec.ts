import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyPortfolioWebsiteComponent } from "./my-portfolio-website.component";

@Component({
  selector: "app-kemerovo-website-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-my-portfolio-website></app-my-portfolio-website>",
  imports: [MyPortfolioWebsiteComponent],
})
export class MyPortfolioWebsiteTestComponent {}

describe("MyPortfolioWebsiteComponent", () => {
  let fixture: ComponentFixture<MyPortfolioWebsiteTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(MyPortfolioWebsiteTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector(
      '[data-test="my-portfolio-website"]',
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});
