import { InjectionToken } from "@angular/core";
import { AppEnvironment } from "@/models/app-environment.interface";
import { TrackingInterface } from "../services/tracking/tracking.interface";
import { LanguageSwitchInterface } from "../services/language-switch/language-switch.interface";
import { MenuStateInterface } from "../services/menu/menu-state.interface";
import { FeaturesInterface } from "@/models/features/features.interface";
import { AppConstants } from "@/models/constants/app-constants";

export const WINDOW = new InjectionToken<Window>("window");

export const ENVIRONMENT = new InjectionToken<AppEnvironment>("environment");

export const VISIT_TIME = new InjectionToken<number>("visit time");

export const TRACKING = new InjectionToken<TrackingInterface>("tracking");

export const LANGUAGE_SWITCH = new InjectionToken<LanguageSwitchInterface>(
  "language swith",
);

export const MENU_STATE = new InjectionToken<MenuStateInterface>("menu state");

export const FEATURES = new InjectionToken<FeaturesInterface>("features");

export const CONSTANTS = new InjectionToken<AppConstants>("constants");
