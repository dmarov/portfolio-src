import { Tracking } from "../tracking";

export class DebugTracking extends Tracking {
  public sendEvent(eventName: string, data: object): Promise<void> {
    // eslint-disable-next-line no-console
    console.info(
      `Sending tracking event ${eventName} with data ${JSON.stringify(data)}`,
    );

    return Promise.resolve();
  }
}
