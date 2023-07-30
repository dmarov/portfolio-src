export class GoogleAnalytics {
  private static timeout = 1000;

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
