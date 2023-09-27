import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VmediaWebsiteComponent } from './vmedia-website.component';

@Component({
  selector: 'app-vmedia-website-test',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-vmedia-website></app-vmedia-website>`
})
export class VmediaWebsiteTestComponent {

}

describe('VmediaWebsiteComponent', () => {
  let fixture: ComponentFixture<VmediaWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VmediaWebsiteComponent],
    });
    fixture = TestBed.createComponent(VmediaWebsiteComponent);
    fixture.detectChanges();
  });

  it('should have test attribute', () => {
    const input = document.querySelector('[data-test="vmedia-website"]') as HTMLInputElement;
    expect(input).toBeTruthy();
  });
});

