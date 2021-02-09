export class LightEffect {

    static init() {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0) {
                    if (!entry.target.classList.contains("light--disabled")) {
                        entry.target.classList.toggle('light--disabled', true);
                    }
                } else {
                    if (entry.target.classList.contains("light--disabled")) {
                        entry.target.classList.toggle('light--disabled', false);
                    }
                }
            })
        });

        document.querySelectorAll('.light')
            .forEach(el => {
                observer.observe(el);
            });
    }
}
