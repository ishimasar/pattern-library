/* /js/modules/RangeSlider.js */

/**
 * RangeSlider UI class
 */
export class RangeSlider {
  constructor() {
    this.range = document.getElementById('volume');
    this.volumeValue = document.getElementsByClassName('volume-value')
  }
  changeRangeNum() {
    this.range.addEventListener('input', () => {
      this.volumeValue[0].textContent = this.range.value;
    });
  }
}

/* /js/main.js */

import { RangeSlider } from './modules/RangeSlider.js';

const rangeSlider = new RangeSlider();
rangeSlider.changeRangeNum();