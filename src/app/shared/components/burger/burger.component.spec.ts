import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BurgerComponent } from "./burger.component";

@Component({
  selector: "app-burger-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BurgerComponent],
  template: `<app-burger
    [opened]="opened"
    (openedChange)="onToggle()"
  ></app-burger>`,
})
export class BurgerTestComponent {
  public opened = false;

  public constructor(private readonly cdr: ChangeDetectorRef) {}

  public onToggle(): void {
    // spy attached to this method
  }

  public setOpened(): void {
    this.opened = true;
    this.cdr.detectChanges();
  }
}
describe("BurgerComponent", () => {
  let fixture: ComponentFixture<BurgerTestComponent>;
  let component: BurgerTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    fixture = TestBed.createComponent(BurgerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should have testing attribute", () => {
    const el = document.querySelector("[data-test='burger']");

    expect(el).toBeTruthy();
  });

  it("should have opened class when has opened state", async () => {
    component.setOpened();

    const el = document.querySelector(".burger_opened");

    expect(el).toBeTruthy();
  });

  it("should call onToggle on click", () => {
    component.opened = false;
    fixture.detectChanges();

    const spy = jest.spyOn(component, "onToggle");

    const el = document.querySelector("[data-test='burger']") as HTMLElement;
    el.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
