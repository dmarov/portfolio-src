import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAboutMeComponent } from './page-about-me.component';

describe('PageAboutMeComponent', () => {
  let component: PageAboutMeComponent;
  let fixture: ComponentFixture<PageAboutMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAboutMeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
