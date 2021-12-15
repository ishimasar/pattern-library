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
      console.log('2回以上連続で同じ状態に変更しようとしました');
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
  openButton.onclick = function() {
    // イベントと関数を紐付け
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('overflow-hidden');
  }

  // スクロール解除
  closeButton.onclick = function() {
    // イベントと関数を紐付け
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.remove('overflow-hidden');
  }

  function openDrawer() {
    changeState(true);
    disableScroll(event);
  }

  function closeDrawer() {
    changeState(false);
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
}

/* /js/main.js */

import { drawerMenu } from './modules/drawerMenu.js';

const openButton = document.querySelector('.js-open-drawer') ? drawerMenu() : false;