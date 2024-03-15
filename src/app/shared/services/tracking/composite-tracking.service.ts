import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingInterface } from "./tracking.interface";

export class CompositeTrackingService implements TrackingInterface {
  public constructor(
    private readonly trackings: ReadonlyArray<TrackingInterface>,
  ) {}

  public async sendCustomEvent(
    eventName: CustomTrackingEvent,
    data: object,
  ): Promise<void> {
    await Promise.all(
      this.trackings.map((t) => t.sendCustomEvent(eventName, data)),
    );
  }
}
