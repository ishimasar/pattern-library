'use strict';

export class DisplayScreenData {
  constructor(id) {
    this.body = document.getElementById(id);
    this.scrollPos = window.pageYOffset;
  }

  addElement() {
    if(this.body != null) {
      const target = document.createElement('div');
      target.id = 'target';
      target.textContent = 'ページスクロール量：0';
      target.style.position = 'fixed';
      target.style.top = '.3rem';
      target.style.right = '73%';
      target.style.fontWeight = 'bold';
      
      this.body.appendChild(target);
    }
  }

  displayData() {
    window.addEventListener('scroll', () => {
      this.scrollPos = window.pageYOffset;
      setTimeout(() => {
        target.textContent = 'ページスクロール量：' + Math.ceil(this.scrollPos);
      }, 200);
    });
  }
}