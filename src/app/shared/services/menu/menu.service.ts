import { Observable } from "rxjs";

export abstract class MenuService {
  public abstract readonly menuVisible$: Observable<boolean>;

  public abstract toggle(): void;

  public abstract open(): void;

  public abstract close(): void;
}
