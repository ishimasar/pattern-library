/* 暫定コード */
/* /js/modules/DrawerMenu.js */

export function drawerMenu() {
  const openButton = document.querySelector('.js-open-drawer');
  const drawer = document.querySelector('.js-drawer');
  const closeButton = drawer.querySelector('.js-close-drawer');
  const backdrop = drawer.querySelector('.js-backdrop');
  let drawerOpen = false;

  function changeAriaExpanded(state) {
    const value = state ? 'true' : 'false';
    drawer.setAttribute('aria-expanded', value);
    openButton.setAttribute('aria-expanded', value);
    closeButton.setAttribute('aria-expanded', value);
  }

  function changeState(state) {
    if (state === drawerOpen) {
      return;
    }
    changeAriaExpanded(state);
    drawerOpen = state;
  }

  // スクロールを禁止にする関数
  function disableScroll(event) {
    event.preventDefault();
  }

  // スクロール禁止
  openButton.onclick = () => {
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
  }

  // スクロール解除
  closeButton.onclick = () => {
    // イベントと関数を紐付け
    document.removeEventListener('touchmove', disableScroll, { passive: false });
  }

  function openDrawer() {
    changeState(true);
    disableScroll(event);

    // ドロワーが開いたときに背景固定。要リファクタリング
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    changeState(false);

    // ドロワーが閉じたときに背景固定解除&スクロール位置戻す。要リファクタリング
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.width = '';
    body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  function onClickOpenButton() {
    openDrawer();
  }

  function onClickCloseButton() {
    closeDrawer();
  }

  openButton.addEventListener('click', onClickOpenButton, false);
  closeButton.addEventListener('click', onClickCloseButton, false);
  backdrop.addEventListener('click', onClickCloseButton, false);
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
}

/* /js/main.js */

import { drawerMenu } from './modules/DrawerMenu.js';

const openButton = document.querySelector('.js-open-drawer') ? drawerMenu() : false;