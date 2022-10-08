/**
* Stepper UI class
*/
export class Stepper {
  constructor(next, back) {
    this.indicaters = document.querySelectorAll('.js-step');
    this.next = document.querySelectorAll(next);
    this.back = document.querySelectorAll(back);
    this.label = document.querySelector('.stepper-contents .label');

    this.container = document.querySelectorAll('.stepper-contents');
    this.containerArray = [].slice.call(this.container);

    this.stepNext();
    this.stepBack();
    this.stepPhase();
  }

  stepNext() {
    for (let i = 0; i < this.next.length; i++) {
      // nextボタンのクリックイベント
      this.next[i].addEventListener('click', e => {
        e.preventDefault();
        this.container[i].setAttribute('aria-hidden', 'true');
        this.container[i + 1].setAttribute('aria-hidden', 'false');
        this.indicaters[i].removeAttribute('aria-current');
        this.indicaters[i + 1].setAttribute('aria-current', 'step');
      }, { passive: false });
    }
  }

  stepBack() {
    for (let i = 0; i < this.back.length; i++) {
      // backボタンのクリックイベント
      this.back[i].addEventListener('click', e => {
        e.preventDefault();
        this.container[i].setAttribute('aria-hidden', 'true');
        this.container[i - 1].setAttribute('aria-hidden', 'false');
        this.indicaters[i].removeAttribute('aria-current');
        this.indicaters[i - 1].setAttribute('aria-current', 'step');
      }, { passive: false });
    }
  }

  stepPhase() {
    for (let i = 0; i < this.indicaters.length; i++) {
      // インジケーター(1,2,3...)のクリックイベント
      this.indicaters[i].addEventListener('click', e => {
        e.preventDefault();

        for (let i = 0; i < this.indicaters.length; i++) {
          if (this.indicaters[i].getAttribute('aria-current') === 'step') {
            this.indicaters[i].removeAttribute('aria-current', 'step');
          }
        }

        this.indicaters[i].setAttribute('aria-current', 'step');

        let pairedId = document.getElementById(this.indicaters[i].getAttribute('aria-controls'));

        for (let i = 0; i < this.container.length; i++) {
          if (this.container[i].hasAttribute('aria-hidden', 'false')) {
            this.container[i].setAttribute('aria-hidden', 'true');
          }
        }
        pairedId.setAttribute('aria-hidden', 'false');

        pairedId.setAttribute('tabindex', '0');
        pairedId.focus();
      }, { passive: false });
    }
  }
}