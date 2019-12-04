import { Carousel } from './modules/Carousel.js';
import { DisplayScreenData } from './modules/DisplayScreenData.js';
import { ModalDialog } from './modules/ModalDialog.js';
import { scrollSmooth } from './modules/SmoothScroll.js';
import { Tab } from './modules/Tab.js';
// import { TabSwipe } from './modules/TabSwipe.js';

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

const elem = document.querySelectorAll('.toc');
Stickyfill.add(elem);