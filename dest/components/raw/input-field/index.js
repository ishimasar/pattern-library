/* /js/modules/PasswordReveal.js */

/**
 * PasswordReveal class - 2type
 */
export class PasswordRevealCheckbox {
  constructor(password, showPassword) {
    this.password = document.querySelector(password);
    this.showPassword = document.getElementById(showPassword);
    if(this.password != null) {
      this.showPassword.addEventListener('change',this.onShowPassword.bind(this), true);
    }
  }

  onShowPassword() {
    const type = this.showPassword.checked ? 'text' : 'password';
    this.password.setAttribute('type', type);
  }
}

export class PasswordRevealButton {
  constructor(input, button) {
    this.input = document.getElementById(input);
    this.button = document.getElementById(button);
    if(this.input != null) {
      this.button.addEventListener('click', this.onButtonClick.bind(this), false);
    }
  }

  onButtonClick() {
    if(this.input.type === 'password') {
      this.input.type = 'text';
      this.button.innerText = 'パスワードを隠す';
      this.button.setAttribute('aria-pressed', 'true');
    } else{
      this.input.type = 'password';
      this.button.innerText = 'パスワードを表示する';
      this.button.setAttribute('aria-pressed', 'false');
    }
  }
}

/* /js/main.js */

const passwordRevealCheckbox = new PasswordRevealCheckbox('.js-display-pass', 'js-show-pass');

const passwordRevealBottun = new PasswordRevealButton('js-input', 'js-reveal-btn');