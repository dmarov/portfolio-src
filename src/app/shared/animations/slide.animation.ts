import { animate, style, transition, trigger } from "@angular/animations";

export const slideAnimation = trigger("slideAnimation", [
  transition(":enter", [
    style({
      opacity: "0",
      overflow: "hidden",
      height: "0",
    }),
    animate("200ms", style({ height: "*", opacity: "1" })),
  ]),
  transition(":leave", [
    style({
      opacity: "1",
      overflow: "hidden",
      height: "*",
    }),
    animate("200ms", style({ height: "0", opacity: "0" })),
  ]),
]);
