/* /js/modules/Toast.js */

/**
 * Toast UI class
 */
export class Toast {
  constructor(id1, id2, insertElem, id3, id4) {
    this.trigger = document.getElementById(id1);
    this.toastBody = document.getElementById(id2);
    this.toastBodyText = document.querySelector(insertElem);
    this.close = document.getElementById(id3);
    this.pattern = document.getElementById('id4');
    this.timerId;
  }
  showToast() {
    if (this.toastBody) {
      this.trigger.addEventListener('click', () => {
        this.toastBody.setAttribute('aria-atomic', 'true');
        this.toastBody.setAttribute('aria-hidden', 'false');
        this.toastBody.classList.remove('is-invisible');
        !this.toastBodyText ?
          this.toastBody.innerHTML = '<button id="js-toast-close" type="button" class="close-button">×</button><p class="text">notification!<span class="supplement-line">1件の通知があります</span></p>' :
          false;
        this.stopDisappearing();
        this.timerId = setTimeout(() => {
          setTimeout(() => {
            this.toastBody.setAttribute('aria-atomic', 'false');
            this.toastBody.setAttribute('aria-hidden', 'true');
          }, 500);
            this.toastBody.classList.add('is-invisible');
        }, 5500);
      });
    }
  }
  removeToast() {
    this.toastBody.addEventListener('click', (e) => {
      const target = e.target || e.srcElement;
      if (target.id == this.close.id) {
        this.toastBody.setAttribute('aria-atomic', 'false');
        this.toastBody.setAttribute('aria-hidden', 'true');
      }
    });
  }
  stopDisappearing() {
    clearTimeout(this.timerId);
  }

  addAppearancePattern() {
    this.pattern.addEventListener('change', () => {
      const value = this.patter.value;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
      }
    });
  }
}

/* /js/main.js */

import { Toast } from './modules/Toast.js';

const toast = new Toast('js-toast-trigger', 'js-toast-popup', '.toast > .text', 'js-toast-close');
toast.showToast();
toast.removeToast();