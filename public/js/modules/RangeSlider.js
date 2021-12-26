export class RangeSlider {
  constructor(range, value) {
    this.range = document.getElementById(range);
    this.volumeValue = document.getElementsByClassName(value)
  }
  changeRangeNum() {
    if (this.range) {
      this.range.addEventListener('input', () => {
        this.volumeValue[0].textContent = this.range.value;
      });
    }
  }
}