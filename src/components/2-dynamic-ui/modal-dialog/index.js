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
    this.openflag = true;

    if(this.wrap != null) {
      // eslint-disable-next-line no-undef
      dialogPolyfill.registerDialog(this.dialog);
    }
  }
  showDialog() {
    if(this.wrap != null && !this.dialog.hasAttribute('open')) {
      this.open.addEventListener('click', () => {
        if(this.openflag === true) {
          this.dialog.showModal();
          this.dialog.style.display = 'block';
          this.dialog.style.visibility = 'visible';
          this.dialog.classList.remove('is-motioned');
          this.dialog.setAttribute('tabindex', '0');
          this.dialog.focus();
          this.fixBackdrop();

          this.openflag = false;
        }
      });
    }
    this.opneflag = false;
  }
  hideDialog() {
    if(this.wrap != null) {
      this.yes.addEventListener('click', () => {
        if(this.dialog.hasAttribute('open')) {
          this.hideProcess('はい');
          this.unfixBackdrop();
        }
      });
      this.no.addEventListener('click', () => {
        if(this.dialog.hasAttribute('open')) {
          this.hideProcess('いいえ');
          this.unfixBackdrop();
        }
      });
      this.close.addEventListener('click', () => {
        if(this.dialog.hasAttribute('open')) {
          this.hideProcess('きみ、閉じるボタンを押したね...');
          this.unfixBackdrop();
        }
      });
      this.dialog.addEventListener('cancel', () => {
        if(this.dialog.hasAttribute('open')) {
          this.hideProcess('Escapeボタン押しました？');
          this.unfixBackdrop();
        }
      });
      this.dialog.addEventListener('click', (event) => {
        if (event.target === this.dialog && this.dialog.hasAttribute('open')) {
          this.hideProcess('きみ、ウインドウの外を押したね...');
          this.unfixBackdrop();
        }
      });
    }
  }
  fixBackdrop() {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  }
  unfixBackdrop() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
  hideProcess(resText) {
    this.dialog.close(resText);
    this.dialog.classList.add('is-motioned');
    this.wrap.setAttribute('tabindex', '0');
    this.wrap.focus();
    setTimeout(() => {
      this.dialog.style.visibility = 'hidden';
      this.dialog.style.display = 'none';
      this.openflag = true;
    }, 200);
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