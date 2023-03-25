export class DropDownList {
  constructor(el1, el2) {
    this.startingPoints = document.querySelectorAll(el1);
    this.dropDownList = document.querySelectorAll(el2);
  }

  showList() {
    for (let i = 0; i < this.startingPoints.length; i++) {
      let pairedId = document.getElementById(this.startingPoints[i].getAttribute('aria-controls'));

      this.startingPoints[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (!this.dropDownList[i].firstElementChild.hasAttribute('tabindex')) {
          this.startingPoints[i].setAttribute('aria-pressed', 'true');
          pairedId.setAttribute('aria-hidden', 'false');
          pairedId.firstElementChild.setAttribute('tabindex', '0');
          pairedId.focus();

          for (let i = 0; i < this.dropDownList.length; i++) {
            if (this.dropDownList[i] !== pairedId) {
              this.startingPoints[i].setAttribute('aria-pressed', 'false');
              pairedId.setAttribute('aria-hidden', 'false');
              pairedId.firstElementChild.setAttribute('tabindex', '0');
              pairedId.focus();
              this.dropDownList[i].setAttribute('aria-hidden', 'true');
              this.dropDownList[i].firstElementChild.removeAttribute('tabindex');
            }
          }
        } else {
          this.startingPoints[i].setAttribute('aria-pressed', 'false');
          pairedId.setAttribute('aria-hidden', 'true');
          pairedId.firstElementChild.removeAttribute('tabindex');
          pairedId.blur();
        }
      });
      document.addEventListener('click', (e) => {
        if(e.target.closest('.js-dropdown-list') === null) {
          this.startingPoints[i].setAttribute('aria-pressed', 'false');
          this.dropDownList[i].setAttribute('aria-hidden', 'true');
        }
        this.flg = true;
      });
    }
  }
}