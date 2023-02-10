export class DropDownList {
  constructor(el1) {
    this.startingPoints = document.querySelectorAll(el1);
  }

  onClick() {
    for (let i = 0; i < this.startingPoints.length; i++) {
      const dropDownList = this.startingPoints[i].nextElementSibling;
      let openflag = false;
      this.startingPoints[i].addEventListener('click', () => {
        if(openflag === false) {
          dropDownList.setAttribute('aria-hidden', 'false');
          openflag = true;
        } else {
          dropDownList.setAttribute('aria-hidden', 'true');
          openflag = false;
        }
      });
    }
  }

}