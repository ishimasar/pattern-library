export class RangeSlider {
  constructor() {
    this.range = document.getElementById('volume');
    this.volumeValue = document.getElementsByClassName('volume-value')
  }
  changeRangeNum() {
    if (this.range) {
      this.range.addEventListener('input', () => {
        this.volumeValue[0].textContent = this.range.value;
      });
    }
  }
}