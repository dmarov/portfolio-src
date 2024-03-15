import { InjectionToken } from "@angular/core";
import { AppEnvironment } from "@/app/models/app-environment.interface";
import { TrackingInterface } from "../services/tracking/tracking.interface";
import { LanguageSwitchInterface } from "../services/language-switch/language-switch.service";

export const WINDOW = new InjectionToken<Window>("window");

export const ENVIRONMENT = new InjectionToken<AppEnvironment>("environment");

export const VISIT_TIME = new InjectionToken<number>("visit time");

export const TRACKING = new InjectionToken<TrackingInterface>("tracking");

export const LANGUAGE_SWITCH = new InjectionToken<LanguageSwitchInterface>(
  "language swith",
);
