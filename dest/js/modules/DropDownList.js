export class DropDownList {
  constructor(el1) {
    this.startingPoints = document.querySelectorAll(el1);
    this.onClick();
  }

  onClick() {
    for (let i = 0; i < this.startingPoints.length; i++) {
      const dropDownList = this.startingPoints[i].querySelector('.dropdown-list');

      this.startingPoints[i].addEventListener('click', e => {
        e.preventDefault();
        dropDownList.setAttribute('aria-hidden', 'false');
      });
    }
  }
}