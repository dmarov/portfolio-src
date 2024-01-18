import { InjectionToken } from "@angular/core";
import { AppEnvironment } from "@/app/models/app-environment.interface";

export const WINDOW = new InjectionToken<Window>("window");

export const ENVIRONMENT = new InjectionToken<AppEnvironment>("environment");
