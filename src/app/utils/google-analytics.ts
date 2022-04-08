export class GoogleAnalytics {

    private static timeout = 1000;

    static async sendEvent(eventName: string, data: any): Promise<void> {
        return new Promise((res, _rej) => {
            window.dataLayer.push({
                ...data,
                "event": eventName,
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
