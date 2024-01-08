export {};

declare global {
  interface Window {
    gtag: Function;
    ym: Function;
    ym_counter_id: number;
  }
}
