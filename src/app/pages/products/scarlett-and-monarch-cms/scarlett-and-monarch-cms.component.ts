import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scarlett-and-monarch-cms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scarlett-and-monarch-cms.component.html',
  styleUrls: ['./scarlett-and-monarch-cms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScarlettAndMonarchCmsComponent {

}
