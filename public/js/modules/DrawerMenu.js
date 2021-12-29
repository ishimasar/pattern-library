/* 暫定コード */

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

  function openDrawer() {
    changeState(true);
    fixBackdrop();
  }

  function closeDrawer() {
    changeState(false);
    unfixBackdrop();
  }

  function fixBackdrop() {
    const body = document.body;
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  }

  function unfixBackdrop() {
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