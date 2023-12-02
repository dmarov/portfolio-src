export class UnfoldEffect {
  public static init(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) {
          return;
        }

        entry.target.classList.toggle("unfold_hidden", false);
        observer.unobserve(entry.target);
      });
    });

    document.querySelectorAll(".unfold").forEach((el) => {
      observer.observe(el);
    });
  }
}
