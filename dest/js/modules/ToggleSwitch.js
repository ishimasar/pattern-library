export class ToggleSwitch {
  constructor(theSwitch, onBtn, offBtn) {
    this.theSwitch = document.querySelector(theSwitch);
    this.onBtn = document.querySelector(onBtn);
    this.offBtn = document.querySelector(offBtn);
  }

  switchState() {
    if(this.theSwitch != null) {
      this.theSwitch.addEventListener('click', () => {
        if (this.theSwitch.getAttribute('aria-checked') === 'false') {
          this.theSwitch.setAttribute('aria-checked', 'true');
          this.onBtn.setAttribute('aria-checked', 'true');
        } else {
          this.theSwitch.setAttribute('aria-checked', 'false');
          this.offBtn.setAttribute('aria-checked', 'true');
        }
      });
    }
  }
  onState() {
    if(this.theSwitch != null) {
      this.onBtn.addEventListener('click', () => {
        if (this.offBtn.getAttribute('aria-checked') === 'true') {
          this.theSwitch.setAttribute('aria-checked', 'true');
          this.onBtn.setAttribute('aria-checked', 'true');
          this.offBtn.setAttribute('aria-checked', 'false');
        }
      });
    }
  }
  offState() {
    if(this.theSwitch != null) {
      this.offBtn.addEventListener('click', () => {
        if (this.onBtn.getAttribute('aria-checked') === 'true') {
          this.theSwitch.setAttribute('aria-checked', 'false');
          this.offBtn.setAttribute('aria-checked', 'true');
          this.onBtn.setAttribute('aria-checked', 'false');
        }
      });
    }
  }
}