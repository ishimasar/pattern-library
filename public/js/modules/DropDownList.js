export class DropDownList {
  constructor(el1, el2) {
    this.startingPoints = document.querySelectorAll(el1);
    this.dropDownList = document.querySelectorAll(el2);
  }

  onClick() {
    for (let i = 0; i < this.startingPoints.length; i++) {
      this.startingPoints[i].addEventListener('click', e => {
        e.preventDefault();
        const dropDownList = this.startingPoints[i].nextElementSibling;
        for (let i = 0; i < this.dropDownList.length; i++) {
          if (this.dropDownList[i].hasAttributes('aria-hidden', 'false')) {
            this.dropDownList[i].setAttribute('aria-hidden', 'true');
          }
        }
        if (dropDownList.hasAttributes('aria-hidden', 'true')) {
          dropDownList.setAttribute('aria-hidden', 'false');
        }
      });
    }
  }

}