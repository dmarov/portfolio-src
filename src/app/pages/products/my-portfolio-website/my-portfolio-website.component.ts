import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-my-portfolio-website",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./my-portfolio-website.component.html",
  styleUrls: ["./my-portfolio-website.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPortfolioWebsiteComponent implements OnInit {
  @ViewChild("container", { static: true })
  public container!: ElementRef<HTMLTextAreaElement>;

  public styleTransform = "";

  public constructor(private readonly cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    const observer = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      this.styleTransform = `scale(${width / 1920})`;
      this.cdr.detectChanges();
    });

    observer.observe(this.container.nativeElement);
  }
}
