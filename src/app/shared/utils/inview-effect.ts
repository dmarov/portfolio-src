export class InViewEffect {
  public static init(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) {
          if (!entry.target.classList.contains("inview--not")) {
            entry.target.classList.toggle("inview--not", true);
          }
        } else if (entry.target.classList.contains("inview--not")) {
          entry.target.classList.toggle("inview--not", false);
        }
      });
    });

    document.querySelectorAll(".inview").forEach((el) => {
      observer.observe(el);
    });
  }
}
