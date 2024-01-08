import { TrackingService } from "./tracking.service";

export class TrackingServiceMock extends TrackingService {
  public sendCustomEvent(): Promise<void> {
    // this method is intended to be dummy
    return Promise.resolve();
  }
}
