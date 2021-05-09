/* /js/modules/ModalDialog.js */

/**
 * ModalDialog UI class
 */
export class ModalDialog {
  constructor(id1) {
    this.wrap = document.getElementById(id1);
    this.open = document.getElementById('dialog-open');
    this.dialog = document.querySelector(".dialog-panel[role='dialog']");
    this.yes = document.getElementById('dialog-yes');
    this.no = document.getElementById('dialog-no');
    this.close = document.getElementById('dialog-close');
    this.returnSpan = document.getElementById('return-value');

    if(this.wrap != null) {
      dialogPolyfill.registerDialog(this.dialog);
    }
  }
  showDialog() {
    if(this.wrap != null) {
      this.open.addEventListener('click', () => {
        this.dialog.showModal();
        this.dialog.style.visibility = 'visible';
        this.dialog.classList.remove('is-motioned');
        this.dialog.setAttribute('tabindex', '0');
        this.dialog.focus();
      });
    }
  }
  hideDialog() {
    if(this.wrap != null) {
      this.yes.addEventListener('click', () => {
        this.hideProcess('はい');
      });
      this.no.addEventListener('click', () => {
        this.hideProcess('いいえ');
      });
      this.close.addEventListener('click', () => {
        this.hideProcess('きみ、閉じるボタンを押したね...');
      });
      this.dialog.addEventListener('cancel', () => {
        this.hideProcess('Escapeボタン押しました？');
      });
      this.dialog.addEventListener('click', (event) => {
        if (event.target === this.dialog) {
          this.hideProcess('きみ、ウインドウの外を押したね...');
        }
      });
    }
  }
  hideProcess(resText) {
    this.dialog.close(resText);
    this.dialog.classList.add('is-motioned');
    this.wrap.setAttribute('tabindex', '0');
    this.wrap.focus();
    setTimeout(() => {
      this.dialog.style.visibility = 'hidden';
    }, 250);
  }
  respondValue() {
    if(this.wrap != null) {
      this.dialog.addEventListener('close', () => {
        this.returnSpan.innerHTML = this.dialog.returnValue;
      });
    }
  }
}

/* /js/main.js */

import { ModalDialog } from './modules/ModalDialog.js';

const modalDialog = new ModalDialog('modal-dialog');
modalDialog.showDialog();
modalDialog.hideDialog();
modalDialog.respondValue();