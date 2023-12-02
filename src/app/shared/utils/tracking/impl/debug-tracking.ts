import { Tracking } from "../tracking";

export class DebugTracking extends Tracking {
  public sendEvent(eventName: string, data: object): Promise<void> {
    console.info(
      `Sending tracking event ${eventName} with data ${JSON.stringify(data)}`,
    );

    return Promise.resolve();
  }
}
