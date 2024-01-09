import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { NotFoundComponent } from "./not-found.component";

@Component({
  selector: "app-not-found-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-not-found></app-not-found>",
  imports: [NotFoundComponent],
})
export class NotFoundTestComponent {}

describe("NotFoundComponent", () => {
  let fixture: ComponentFixture<NotFoundTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(NotFoundTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="not-found"]') as HTMLElement;
    expect(el).toBeTruthy();
  });
});
