import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { TechListComponent } from "./tech-list.component";

@Component({
  selector: "app-tech-list-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-tech-list></app-tech-list>",
  imports: [TechListComponent],
})
export class TechListTestComponent { }

describe("TechListComponent", () => {
  let fixture: ComponentFixture<TechListTestComponent>;
  mockIntersectionObserver();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(TechListTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const el = document.querySelector('[data-test="tech-list"]') as HTMLElement;
    expect(el).toBeTruthy();
  });
});
