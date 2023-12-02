import { environment } from "@/environments/environment";

export class GoogleAnalytics {
  private static timeout = environment.trackingEventTimeout;

  public static async sendEvent(
    eventName: string,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      window.gtag("event", eventName, {
        ...data,
        event_callback: () => {
          res();
        },
      });

      setTimeout(() => {
        res();
      }, this.timeout);
    });
  }
}
