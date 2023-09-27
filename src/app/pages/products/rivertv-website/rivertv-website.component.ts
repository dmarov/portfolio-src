import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rivertv-website',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rivertv-website.component.html',
  styleUrls: ['./rivertv-website.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RivertvWebsiteComponent {

}
