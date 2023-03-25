/**
 * Tab UI class
 */
export class Tab {
  constructor(selector1, selector2, selector3, selector4) {
    this.tabUi = document.querySelector(selector1);
    this.tabs = document.querySelectorAll(selector2);
    this.tabPanelWrap = document.querySelector(selector3);
    this.tabPanels = document.querySelectorAll(selector4);
    if(this.tabPanels.length > 0) {
      // NodeListを配列に変換
      this.tabPanelArray = [].slice.call(this.tabPanels);
      this.heightArray = [];
    }
  }

  // tabpanelの高さを配列で返す
  getHeight() {
    if(this.tabPanels.length > 0) {
      for (let i = 0; i < this.tabPanelArray.length; i++) {
        this.heightArray[i] = this.tabPanelArray[i].offsetHeight;
        // tabPanelHeightにtabpanelの高さの配列を代入
        this.tabPanelHeight = this.heightArray;
        // tabPanelHeightのなかで最も大きい値を算出し代入
        this.tabPanelHeight = Math.max.apply(null, this.tabPanelHeight);
      }
      return this.tabPanelHeight;
    }
  }

  // 戻り値(算出した最高値)をラップ要素と各tabpanelに高さ付与する
  setHeight() {
    this.tabPanelHeight = this.getHeight();
    if(this.tabPanels.length > 0) {
      // tabUI全体の高さをtabpanelの最大値分付与(visivility: hidden;で高さが失われた分)
      this.tabPanelWrap.style.height = this.tabPanelHeight + 'px';
    }
  }

  // タブを切り替える
  switchTabs() {
    for (let i = 0; i < this.tabs.length; i++) {

      // tabのクリックイベント
      this.tabs[i].addEventListener('click', e => {
        e.preventDefault();

        for (let i = 0; i < this.tabs.length; i++) {
          // tabがaria-selected="true"を持ち、選択状態を示す場合
          if (this.tabs[i].hasAttributes('aria-selected', 'true')) {
            // そのtabからaria-selected="true"を削除して非選択状態を示す
            this.tabs[i].removeAttribute('aria-selected', 'true');
          }
          if (this.tabPanels[i].hasAttributes('tabindex', '0')) {
            this.tabPanels[i].removeAttribute('tabindex', '0');
          }
        }
        // クリックされたtabにaria-selected="true"を付与して選択状態を示す
        this.tabs[i].setAttribute('aria-selected', 'true');

        let pairedId = document.getElementById(this.tabs[i].getAttribute('aria-controls'));

        for (let i = 0; i < this.tabPanels.length; i++) {
          // tabpanelがaria-hidden="false"を持ち、表示を示す場合
          if (this.tabPanels[i].hasAttributes('aria-hidden', 'false')) {
            // そのtabpanelにaria-hidden="true"を付与して非表示を示す
            this.tabPanels[i].setAttribute('aria-hidden', 'true');
          }
        }
        // クリックされたtabのaria-control値を参照し、対応するtabpanelに対してaria-hidden="false"を付与して表示を示す
        pairedId.setAttribute('aria-hidden', 'false');

        pairedId.setAttribute('tabindex', '0');
        pairedId.focus();
      }, { passive: false });
    }
  }

  throttle() {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.setHeight()
      }, 50);
    });
  }
}