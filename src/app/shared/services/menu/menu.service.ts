import { Observable } from "rxjs";

export abstract class MenuService {
  public abstract readonly menuVisible$: Observable<boolean>;

  public abstract toggle(): void;
}
