import { environment } from "@/environments/environment";

export class GoogleAnalytics {
  private static timeout = environment.trackingEventTimeout;

  public static async sendEvent(
    eventName: string,
    data: object,
  ): Promise<void> {
    return new Promise((res) => {
      window.dataLayer.push({
        ...data,
        event: eventName,
        eventCallback: () => {
          res();
        },
      });

      setTimeout(() => {
        res();
      }, this.timeout);
    });
  }
}
