import { environment } from "@/environments/environment";
import { Tracking } from "../tracking";

export class GoogleAnalytics extends Tracking {
  private readonly timeout = environment.trackingEventTimeout;

  public sendEvent(eventName: string, data: object): Promise<void> {
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
