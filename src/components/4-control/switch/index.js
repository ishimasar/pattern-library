/* /js/modules/ToggleSwitch.js */

/**
 * ToggleSwitch UI class
 */
export class ToggleSwitch {
  constructor(theSwitch, onBtn, offBtn) {
    this.theSwitch = document.querySelector(theSwitch);
    this.onBtn = document.querySelector(onBtn);
    this.offBtn = document.querySelector(offBtn);
  }

  switchState() {
    this.theSwitch.addEventListener('click', () => {
      if (this.theSwitch.getAttribute('aria-checked') === 'false') {
        this.theSwitch.setAttribute('aria-checked', 'true');
        this.onBtn.setAttribute('aria-checked', 'true');
      } else {
        this.theSwitch.setAttribute('aria-checked', 'false');
        this.offBtn.setAttribute('aria-checked', 'true');
      }
    });
  }
  onState() {
    this.onBtn.addEventListener('click', () => {
      if (this.offBtn.getAttribute('aria-checked') === 'true') {
        this.theSwitch.setAttribute('aria-checked', 'true');
        this.onBtn.setAttribute('aria-checked', 'true');
        this.offBtn.setAttribute('aria-checked', 'false');
      }
    });
  }
  offState() {
    this.offBtn.addEventListener('click', () => {
      if (this.onBtn.getAttribute('aria-checked') === 'true') {
        this.theSwitch.setAttribute('aria-checked', 'false');
        this.offBtn.setAttribute('aria-checked', 'true');
        this.onBtn.setAttribute('aria-checked', 'false');
      }
    });
  }
}

/* /js/modules/UiModeSwitcher.js */

/**
 * UiModeSwitcher UI class
 */

export class UiModeSwitcher {
  constructor(switchLabel, switchOn, switchOff, switchContent) {
    // チェックボックスの取得
    this.toggleSwitch = document.querySelector(switchLabel);
    this.onSwitch = document.querySelector(switchOn);
    this.offSwitch = document.querySelector(switchOff);
    this.content = document.querySelector(switchContent);
    this.flg = true;
  }

  switchMode() {
    if(this.toggleSwitch != null) {
      // クリック時の挙動
      this.toggleSwitch.addEventListener('click', () => {
        if (this.flg) {
          // ダークモード
          this.flg = false;
          this.content.classList.remove('light-theme');
          this.content.classList.add('dark-theme');
          this.content.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" viewBox="0 0 512 512" width="2rem" height="2rem"><path fill="#ff922b" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" /></svg><span>　ダークモードに切り替えました</span>';
        } else {
          // ライトモード
          this.flg = true;
          this.content.classList.remove('dark-theme');
          this.content.classList.add('light-theme');
          this.content.textContent = '通常(ライト)モードです';
          this.content.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="2.15rem" height="2.15rem"><path fill="#F06595" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg><span>　通常(ライト)モードです</span>';
        }
      });

      this.onSwitch.addEventListener('click', () => {
        this.flg = false;
        this.content.classList.remove('light-theme');
        this.content.classList.add('dark-theme');
        this.content.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" viewBox="0 0 512 512" width="2rem" height="2rem"><path fill="#ff922b" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" /></svg><span>　ダークモードに切り替えました</span>';
      });

      this.offSwitch.addEventListener('click', () => {
        this.flg = true;
        this.content.classList.remove('dark-theme');
        this.content.classList.add('light-theme');
        this.content.textContent = '通常(ライト)モードです';
        this.content.innerHTML =
          '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="2.15rem" height="2.15rem"><path fill="#F06595" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg><span>　通常(ライト)モードです</span>';
      });
    }
  }
}

/* /js/main.js */

const toggleSwitch = new ToggleSwitch('#switch1', '.switch-state-on', '.switch-state-off');
toggleSwitch.switchState();
toggleSwitch.onState();
toggleSwitch.offState();

const uiModeSwitcher = new UiModeSwitcher('#switch1', '.switch-state-on', '.switch-state-off', '.switch-target');
uiModeSwitcher.switchMode();