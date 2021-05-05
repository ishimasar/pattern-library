/* /js/modules/Accordion.js */

/**
 * Accordion UI class
 */
export class Accordion {
  constructor(el) {
    this.details = el;
    this.summary = this.details.firstElementChild;
    this.collapse = this.summary.nextElementSibling;
    this.collapseCont = this.collapse.firstElementChild;

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
      this.allOpen.setAttribute('disabled', 'true');
      this.allClose.removeAttribute('disabled');
      this.collapse.style.height = this.collapseCont.offsetHeight / 16 + 'rem';
      this.details.setAttribute('aria-expanded', 'true');
      this.collapse.setAttribute('aria-hidden', 'false');
    }
  }

  onAllClose() {
    if (this.details.open) {
      this.allClose.setAttribute('disabled', 'true');
      this.allOpen.removeAttribute('disabled');
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

/* /js/main.js */

import { Accordion } from './modules/Accordion.js';

document.addEventListener('DOMContentLoaded', () => {
  const detailsEls = document.getElementsByTagName('details');

  for (let i = 0; i < detailsEls.length; i++) {
    const accordion = new Accordion(detailsEls[i]);
    accordion.handleEvents();

    // アコーディオンリストopen状態のDOM監視およびclass付け替え・要リファクタ
    if (detailsEls) {
      const allOpen = document.getElementById('all-open');
      const allClose = document.getElementById('all-close');
      const observer = new MutationObserver(records => {
        if (detailsEls[0].open === true && detailsEls[1].open === true && detailsEls[2].open === true && detailsEls[3].open === true && detailsEls[4].open === true) {
          allOpen.setAttribute('disabled', 'true');
        } else {
          allOpen.removeAttribute('disabled');
        }

        if (detailsEls[0].open === false && detailsEls[1].open === false && detailsEls[2].open === false && detailsEls[3].open === false && detailsEls[4].open === false) {
          allClose.setAttribute('disabled', 'true');
        } else {
          allClose.removeAttribute('disabled');
        }
      })
      observer.observe(detailsEls[i], {
        attributes: true,
        attributeFilter: ['open'],
      })
    }
  }
});