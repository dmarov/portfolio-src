import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScarlettAndMonarchCmsComponent } from './scarlett-and-monarch-cms.component';

@Component({
  selector: 'app-scarlett-and-monarch-cms-test',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-scarlett-and-monarch-cms></app-scarlett-and-monarch-cms>`
})
export class ScarlettAndMonarchCmsTestComponent {

}

describe('ScarlettAndMonarchCmsComponent', () => {
  let fixture: ComponentFixture<ScarlettAndMonarchCmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScarlettAndMonarchCmsComponent],
    });
    fixture = TestBed.createComponent(ScarlettAndMonarchCmsComponent);
    fixture.detectChanges();
  });

  it('should have test attribute', () => {
    const input = document.querySelector('[data-test="scarlett-and-monarch-cms"]') as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});

