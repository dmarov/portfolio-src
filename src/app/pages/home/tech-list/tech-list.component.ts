import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechEntry } from "@/app/models/home/tech-entry.interface";

@Component({
  selector: "app-tech-list",
  templateUrl: "./tech-list.component.html",
  styleUrls: ["./tech-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class TechListComponent {
  public readonly techList: ReadonlyArray<TechEntry> = [
    {
      modifierClass: "angular",
      image: "angular.svg",
      alt: "Angular",
      title: "Angular",
    },
    {
      modifierClass: "typescript",
      image: "typescript.svg",
      alt: "Typescript",
      title: "Typescript",
    },
    {
      modifierClass: "angular-material",
      image: "angular-material.png",
      alt: "Angular Material",
      title: "Angular Material",
    },
    {
      modifierClass: "ngrx",
      image: "ngrx.svg",
      alt: "NgRx",
      title: "NgRx",
    },
    {
      modifierClass: "docker",
      image: "docker.png",
      alt: "Docker",
      title: "Docker",
    },
    {
      modifierClass: "nodejs",
      image: "nodejs.png",
      alt: "Nodejs",
      title: "Nodejs",
    },
    {
      modifierClass: "socketio",
      image: "socketio.png",
      alt: "socket.io",
      title: "socket.io",
    },
    {
      modifierClass: "webpack",
      image: "webpack.svg",
      alt: "Webpack",
      title: "Webpack",
    },
    {
      modifierClass: "gulp",
      image: "gulp.svg",
      alt: "Gulp",
      title: "Gulp",
    },
    {
      modifierClass: "nginx",
      image: "nginx.png",
      alt: "Nginx",
      title: "Nginx",
    },
    {
      modifierClass: "vue",
      image: "vue.png",
      alt: "Vue",
      title: "Vue",
    },
    {
      modifierClass: "unix",
      image: "unix.png",
      alt: "Unix",
      title: "Unix",
    },
  ];
}
