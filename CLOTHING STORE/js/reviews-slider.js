export default class ReviewsSlider {
  constructor() {
    this.slider = document.querySelector(".reviews__slider");
    this.cardsContainer = document.querySelector(".reviews__cards");
    this.prevButton = document.querySelector(".reviews__button--prev");
    this.nextButton = document.querySelector(".reviews__button--next");
    this.isAnimating = false;
    if (
      !this.slider ||
      !this.cardsContainer ||
      !this.prevButton ||
      !this.nextButton
    ) {
      return;
    }
    this.init();
  }

  init() {
    this.nextButton.addEventListener("click", () => this.nextSlide());
    this.prevButton.addEventListener("click", () => this.prevSlide());
    window.addEventListener("resize", () => this.resetSlider());
  }

  getGap() {
    return parseFloat(window.getComputedStyle(this.cardsContainer).gap) || 0;
  }

  getCardWidth() {
    const firstCard = this.cardsContainer.querySelector(".reviews__card");
    return firstCard ? firstCard.getBoundingClientRect().width : 0;
  }

  nextSlide() {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    const cardWidth = this.getCardWidth();
    const gap = this.getGap();
    const move = cardWidth + gap;
    this.cardsContainer.style.transition = "transform 0.5s ease";
    this.cardsContainer.style.transform = `translateX(-${move}px)`;

    const handleTransitionEnd = () => {
      const firstCard = this.cardsContainer.firstElementChild;

      this.cardsContainer.append(firstCard);

      this.cardsContainer.style.transition = "none";

      this.cardsContainer.style.transform = "translateX(0)";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.cardsContainer.style.transition = "transform 0.5s ease";
          this.isAnimating = false;
        });
      });
    };

    this.cardsContainer.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });
  }

  prevSlide() {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    const cardWidth = this.getCardWidth();
    const gap = this.getGap();
    const move = cardWidth + gap;
    const lastCard = this.cardsContainer.lastElementChild;

    this.cardsContainer.prepend(lastCard);

    this.cardsContainer.style.transition = "none";

    this.cardsContainer.style.transform = `translateX(-${move}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.cardsContainer.style.transition = "transform 0.5s ease";
        this.cardsContainer.style.transform = "translateX(0)";
      });
    });

    const handleTransitionEnd = () => {
      this.isAnimating = false;
    };

    this.cardsContainer.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });
  }

  resetSlider() {
    this.cardsContainer.style.transition = "none";
    this.cardsContainer.style.transform = "translateX(0)";
  }
}
