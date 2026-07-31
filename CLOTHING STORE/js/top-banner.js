export default class TopBanner {
    constructor() {
        this.banner = document.querySelector(".top-banner");
        this.closeButton = document.querySelector(".top-banner__close-button");

        if (!this.banner || !this.closeButton) return;

        this.closeButton.addEventListener("click", () => {
            this.banner.classList.add("top-banner--close");
        });
    }
}