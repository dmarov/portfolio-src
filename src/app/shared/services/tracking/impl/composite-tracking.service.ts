import { CustomTrackingEvent } from "@/app/models/tracking/custom-tracking-event.enum";
import { TrackingService } from "../tracking.service";

export class CompositeTrackingService extends TrackingService {
  public constructor(
    private readonly trackings: ReadonlyArray<TrackingService>,
  ) {
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
