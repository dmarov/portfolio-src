export class UnfoldEffect {

    static init() {

        document.querySelectorAll('.unfold')
            .forEach(el => {
                el.classList.toggle('unfold--hidden', false);
                el.classList.toggle('unfold--left', false);
                el.classList.toggle('unfold--right', false);
            });
    }
}
