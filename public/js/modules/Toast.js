/* /js/modules/Toast.js */

/**
 * Toast UI class
 */
export class Toast {
  constructor(id1, id2) {
    this.trigger = document.getElementById(id1);
    this.toastBody = document.getElementById(id2);
    this.timerId;
  }
  showToast() {
    if (this.toastBody) {
      this.trigger.addEventListener('click', () => {
        this.toastBody.style.opacity = 1;
        this.toastBody.classList.add('is-motioned');
        this.stopDisappearing();
        this.timerId = setTimeout(() => {
          this.toastBody.style.opacity = 0;
          setTimeout(() => {
            this.toastBody.classList.remove('is-motioned');
          }, 500);
        }, 3000);
      });
    }
  }
  stopDisappearing() {
    clearTimeout(this.timerId);
  }
}