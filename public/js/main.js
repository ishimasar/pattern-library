/* eslint-disable no-unused-vars */
'use strict';

import { Accordion } from './modules/Accordion.js';
// import { Calendar } from './modules/Calendar.js';
import { Carousel } from './modules/Carousel.js';
import { currentLocation } from './modules/CurrentLocation.js';
import { DisplayScreenData } from './modules/DisplayScreenData.js';
import { drawerMenu } from './modules/DrawerMenu.js';
import { ModalDialog } from './modules/ModalDialog.js';
import { scrollSmooth } from './modules/SmoothScroll.js';
import { RangeSlider } from './modules/RangeSlider.js';
import { Tab } from './modules/Tab.js';
// import { TabSwipe } from './modules/TabSwipe.js';
import { Toast } from './modules/Toast.js';
import { ToggleSwitch } from './modules/ToggleSwitch.js';
import { typingText } from './modules/TypingText.js';
import { UiModeSwitcher } from './modules/UiModeSwitcher.js';
import { toggleToc } from './modules/ToggleToc.js';
import { PasswordRevealCheckbox, PasswordRevealButton } from './modules/PasswordReveal.js';

document.addEventListener('DOMContentLoaded', () => {
  const detailsEls = document.querySelectorAll('.accordion-details');

  for (let i = 0; i < detailsEls.length; i++) {
    const accordion = new Accordion(detailsEls[i]);
    accordion.handleEvents();

    // アコーディオンリストopen状態のDOM監視およびclass付け替え・要リファクタ
    if (detailsEls) {
      const allOpen = document.getElementById('all-open');
      const allClose = document.getElementById('all-close');
      const observer = new MutationObserver(() => {
        if (detailsEls[0].open === true && detailsEls[1].open === true && detailsEls[2].open === true && detailsEls[3].open === true && detailsEls[4].open === true) {
          allOpen.setAttribute('disabled', 'true');
        } else {
          allOpen.removeAttribute('disabled');
        }

        if (detailsEls[0].open === false && detailsEls[1].open === false && detailsEls[2].open === false && detailsEls[3].open === false && detailsEls[4].open === false) {
          allClose.setAttribute('disabled', 'true');
        } else {
          allClose.removeAttribute('disabled');
        }
      })
      observer.observe(detailsEls[i], {
        attributes: true,
        attributeFilter: ['open'],
      })
    }
  }
});

const carousel = new Carousel('.js-carousel-cont', '.carousel__img', '.js-carousel-thumb', '.js-carousel-prev', '.js-carousel-next', '.js-carousel-play', '.js-carousel-pause');
carousel.setter();

const displayScreenData = new DisplayScreenData('pageTop');
displayScreenData.addElement();
displayScreenData.displayData();

const openButton = document.querySelector('.js-open-drawer') ? drawerMenu() : false;

const modalDialog = new ModalDialog('modal-dialog');
modalDialog.showDialog();
modalDialog.hideDialog();
modalDialog.respondValue();

const rangeSlider = new RangeSlider('volume', 'volume-value');
rangeSlider.changeRangeNum();
const rangeSliderScale = new RangeSlider('something', 'something-value');
rangeSliderScale.changeRangeNum();

const tab = new Tab('.tab-ui', ".tab[role='tab']", '.tabpanel-wrap', ".tabpanel[role='tabpanel']");
tab.setHeight();
tab.switchTabs();
tab.throttle();

// TabSwipe();

const toast = new Toast('js-toast-trigger', 'js-toast-popup', '.toast > .text', 'js-toast-close', 'appearance-pattern');
toast.showToast();
toast.removeToast();

currentLocation();
scrollSmooth();

toggleToc();

typingText();

const toggleSwitch = new ToggleSwitch('#switch1', '.switch-state-on', '.switch-state-off');
toggleSwitch.switchState();
toggleSwitch.onState();
toggleSwitch.offState();

const uiModeSwitcher = new UiModeSwitcher('#switch1', '.switch-state-on', '.switch-state-off', '.switch-target');
uiModeSwitcher.switchMode();

const elem = document.querySelectorAll('.toc');
// eslint-disable-next-line no-undef
Stickyfill.add(elem);

const passwordRevealCheckbox = new PasswordRevealCheckbox('.js-display-pass', 'js-show-pass');

const passwordRevealBottun = new PasswordRevealButton('js-input', 'js-reveal-btn');