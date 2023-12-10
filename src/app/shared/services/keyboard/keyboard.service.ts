import { Key } from "@/app/models/keyboard/key.enum";

type Registry = { [key: string]: Array<Function> };

export class KeyboardService {
  private readonly registryKeyDown: Registry = Object.create(null);

  private readonly registryKeyUp: Registry = Object.create(null);

  public constructor() {
    document.addEventListener("keydown", (event) => {
      (this.registryKeyDown[event.key] ?? []).forEach((fn) => {
        if (!event.repeat) {
          fn(event);
        }
      });
    });

    document.addEventListener("keyup", (event) => {
      (this.registryKeyUp[event.key] ?? []).forEach((fn) => {
        fn(event);
      });
    });
  }

  public registerKeyDownOnce(key: Key, callback: (event: Event) => void): void {
    const fns = this.registryKeyDown[key];

    if (fns === undefined) {
      this.registryKeyDown[key] = [callback];
    } else {
      this.registryKeyDown[key].push(callback);
    }
  }

  public registerKeyUp(key: Key, callback: (event: Event) => void): void {
    const fns = this.registryKeyUp[key];

    if (fns === undefined) {
      this.registryKeyUp[key] = [callback];
    } else {
      this.registryKeyUp[key].push(callback);
    }
  }
}
