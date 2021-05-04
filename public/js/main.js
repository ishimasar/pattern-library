import { Accordion } from './modules/Accordion.js';
import { Carousel } from './modules/Carousel.js';
import { DisplayScreenData } from './modules/DisplayScreenData.js';
import { ModalDialog } from './modules/ModalDialog.js';
import { scrollSmooth } from './modules/SmoothScroll.js';
import { Tab } from './modules/Tab.js';
// import { TabSwipe } from './modules/TabSwipe.js';
import { UiColorSwitcher } from './modules/UiColorMode.js';

document.addEventListener('DOMContentLoaded', () => {
  const detailsEls = document.getElementsByTagName('details');

  for (let i = 0; i < detailsEls.length; i++) {
    const accordion = new Accordion(detailsEls[i]);
    accordion.handleEvents();

    // アコーディオンリストopen状態のDOM監視およびclass付け替え・要リファクタ
    if (detailsEls) {
      const allOpen = document.getElementById('all-open');
      const allClose = document.getElementById('all-close');
      const observer = new MutationObserver(records => {
        if (detailsEls[0].open === true && detailsEls[1].open === true && detailsEls[2].open === true && detailsEls[3].open === true && detailsEls[4].open === true) {
          allOpen.classList.add('is-disabled');
        } else {
          allOpen.classList.remove('is-disabled');
        }

        if (detailsEls[0].open === false && detailsEls[1].open === false && detailsEls[2].open === false && detailsEls[3].open === false && detailsEls[4].open === false) {
          allClose.classList.add('is-disabled');
        } else {
          allClose.classList.remove('is-disabled');
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

const modalDialog = new ModalDialog('modal-dialog');
modalDialog.showDialog();
modalDialog.hideDialog();
modalDialog.respondValue();

const tab = new Tab('.tab-ui', ".tab[role='tab']", '.tabpanel-wrap', ".tabpanel[role='tabpanel']");
tab.setHeight();
tab.switchTabs();
tab.throttle();

// TabSwipe();

scrollSmooth();

const uiColorSwitcher = new UiColorSwitcher('#switch1', '.switch-content');
uiColorSwitcher.switchColor();

const elem = document.querySelectorAll('.toc');
Stickyfill.add(elem);