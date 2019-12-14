'use strict';

export class Accordion {
  constructor(el) {
    this.details = el;
    this.summary = this.details.firstElementChild;
    this.collapse = this.summary.nextElementSibling;
    this.collapseCont = this.collapse.firstElementChild;

    this.list = document.querySelector('.accordion-list');

    this.allOpen = document.getElementById('all-open');
    this.allClose = document.getElementById('all-close');
  }

  handleEvents() {
    this.handlers = {};
    this.handlers.click = this.onClick.bind(this);
    this.summary.addEventListener('click', this.handlers.click);
    this.handlers.transitionEnd = this.onTransitionEnd.bind(this);

    this.handlers.click = this.onAllOpen.bind(this);
    this.allOpen.addEventListener('click', this.handlers.click);

    this.handlers.click = this.onAllClose.bind(this);
    this.allClose.addEventListener('click', this.handlers.click);

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.onResize();
      }, 50);
    });
  }

  onClick(e) {
    if (this.details.open) {
      this.collapse.style.height = '';
      this.collapse.addEventListener('transitionend', this.handlers.transitionEnd);

      this.details.setAttribute('aria-expanded', 'false');
      this.collapse.setAttribute('aria-hidden', 'true');
    } else {
      this.details.open = true;
      this.collapse.style.height = this.collapseCont.offsetHeight / 16 + 'rem';

      this.details.setAttribute('aria-expanded', 'true');
      this.collapse.setAttribute('aria-hidden', 'false');

      this.allClose.classList.remove('is-disabled');
    }
    e.preventDefault();
  }

  onTransitionEnd() {
    this.collapse.removeEventListener('transitionend', this.handlers.transitionEnd);
    this.details.open = false;
    this.allOpen.classList.remove('is-disabled');
  }

  onAllOpen() {
    if (!this.details.open) {
      this.details.open = true;
      this.allOpen.classList.add('is-disabled');
      this.allClose.classList.remove('is-disabled');
      this.collapse.style.height = this.collapseCont.offsetHeight / 16 + 'rem';
      this.details.setAttribute('aria-expanded', 'true');
      this.collapse.setAttribute('aria-hidden', 'false');
    }
  }

  onAllClose() {
    if (this.details.open) {
      this.allClose.classList.add('is-disabled');
      this.allOpen.classList.remove('is-disabled');
      this.collapse.style.height = '';
      this.collapse.addEventListener('transitionend', this.handlers.transitionEnd);
      this.details.setAttribute('aria-expanded', 'false');
      this.collapse.setAttribute('aria-hidden', 'true');
    }
  }

  onResize() {
    if (this.details.open) {
      this.collapse.style.height = this.collapseCont.offsetHeight / 16 + 'rem';
    }
  }
}