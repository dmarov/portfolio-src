import { TrackingInterface } from "./tracking.interface";

export class TrackingServiceMock implements TrackingInterface {
  public sendCustomEvent(): Promise<void> {
    // this method is intended to be dummy
    return Promise.resolve();
  }
}
