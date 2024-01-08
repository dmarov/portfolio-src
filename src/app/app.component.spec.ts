import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { KeyboardService } from "./shared/services/keyboard/keyboard.service";
import { MenuService } from "./shared/services/menu/menu.service";
import { MenuServiceMock } from "./shared/services/menu/menu.service.mock";
import { TrackingService } from "./shared/services/tracking/tracking.service";
import { TrackingServiceMock } from "./shared/services/tracking/tracking.service.mock";

@Component({
  selector: "app-test",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: "<app-root></app-root>",
  imports: [AppComponent],
})
export class AppTestComponent {}

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, NoopAnimationsModule],
      providers: [
        {
          provide: TrackingService,
          useClass: TrackingServiceMock,
        },
        {
          provide: MenuService,
          useClass: MenuServiceMock,
        },
        KeyboardService,
      ],
    });
    fixture = TestBed.createComponent(AppTestComponent);
    fixture.detectChanges();
  });

  it("should have test attribute", () => {
    const input = document.querySelector('[data-test="app"]') as HTMLElement;
    expect(input).toBeTruthy();
  });
});
