import { InjectionToken } from "@angular/core";
import { AppEnvironment } from "@/app/models/app-environment.interface";
import { TrackingInterface } from "../services/tracking/tracking.interface";
import { LanguageSwitchInterface } from "../services/language-switch/language-switch.interface";
import { MenuStateInterface } from "../services/menu/menu-state.interface";
import { FeaturesInterface } from "@/app/models/features/features.interface";

export const WINDOW = new InjectionToken<Window>("window");

export const ENVIRONMENT = new InjectionToken<AppEnvironment>("environment");

export const VISIT_TIME = new InjectionToken<number>("visit time");

export const TRACKING = new InjectionToken<TrackingInterface>("tracking");

export const LANGUAGE_SWITCH = new InjectionToken<LanguageSwitchInterface>(
  "language swith",
);

export const MENU_STATE = new InjectionToken<MenuStateInterface>("menu state");

export const FEATURES = new InjectionToken<FeaturesInterface>("features");
