import { CustomTrackingEvent } from "@/app/models/custom-tracking-event.enum";
import { Tracking } from "../tracking";

export class CompositeTracking extends Tracking {
  public constructor(private readonly trackings: ReadonlyArray<Tracking>) {
    super();
  }

  public async sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    await Promise.all(
      this.trackings.map((t) => t.sendCustomEvent(eventName, data)),
    );
  }
}
