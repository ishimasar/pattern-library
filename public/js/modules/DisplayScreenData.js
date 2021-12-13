export class DisplayScreenData {
  constructor(id) {
    this.body = document.getElementById(id);
    this.scrollPos = window.pageYOffset;
    this.target = document.createElement('div');
  }

  addElement() {
    if(this.body != null) {
      this.target.id = 'this.target';
      this.target.textContent = 'ページスクロール量：0';
      this.target.style.position = 'fixed';
      this.target.style.top = '.3rem';
      this.target.style.right = '73%';
      this.target.style.fontWeight = 'bold';

      this.body.appendChild(this.target);
    }
  }

  displayData() {
    if(this.body != null) {
      window.addEventListener('scroll', () => {
        this.scrollPos = window.pageYOffset;
        setTimeout(() => {
          this.target.textContent = 'ページスクロール量：' + Math.ceil(this.scrollPos);
        }, 200);
      });
    }
  }
}