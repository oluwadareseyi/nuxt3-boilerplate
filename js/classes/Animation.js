import AutoBind from "../utils/bind";

export default class {
    constructor({ element, elements }) {
        AutoBind(this);

        const { animationDelay, animationTarget } = element.dataset;

        this.delay = animationDelay;

        this.element = element;
        this.elements = elements;

        this.target = animationTarget ? element.closest(animationTarget) : element;

        this.isVisible = false;
        this.hasAnimatedIn = false;

        if ("IntersectionObserver" in window) {
            this.createObserver();

            this.animateOut();
        } else {
            this.animateIn();
        }
    }

    createObserver() {
        this.observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!this.isVisible && entry.isIntersecting) {
                    if (this.delay) {
                        setTimeout(() => {
                            this.animateIn();
                        }, this.delay);
                    } else {
                        this.animateIn();
                    }
                } else {
                    this.animateOut();
                }
            });
        }).observe(this.target);
    }

    animateIn() {
        this.isVisible = true;
    }

    animateOut() {
        // this.isVisible = false;
    }
}
