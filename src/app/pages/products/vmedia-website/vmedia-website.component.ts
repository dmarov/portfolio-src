import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vmedia-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vmedia-website.component.html',
  styleUrls: ['./vmedia-website.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VmediaWebsiteComponent {

}
