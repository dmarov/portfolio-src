export class UnfoldEffect {

    static init() {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio <= 0) {
                    return;
                }

                entry.target.classList.toggle('unfold--hidden', false);
                entry.target.classList.toggle('unfold--left', false);
                entry.target.classList.toggle('unfold--right', false);
            });
        });

        document.querySelectorAll('.unfold')
            .forEach(el => {
                observer.observe(el);
            });
    }
}
