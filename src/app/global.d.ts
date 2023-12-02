import { Tracking } from "./shared/utils/tracking/tracking";

export {};

declare global {
  interface Window {
    gtag: Function;
    tracking: Tracking;
  }
}
