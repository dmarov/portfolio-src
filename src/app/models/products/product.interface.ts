import { Type } from "@angular/core";

export interface Product {
  id: string;
  component: Type<unknown>;
}
