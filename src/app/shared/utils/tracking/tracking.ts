export abstract class Tracking {
  public abstract sendEvent(eventName: string, data: object): Promise<void>;
}
