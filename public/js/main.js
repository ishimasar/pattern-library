import { DisplayScreenData } from './modules/DisplayScreenData.js';
import { ModalDialog } from './modules/ModalDialog.js'
import { scrollSmooth } from './modules/SmoothScroll.js';
import { Tab } from './modules/Tab.js';
// import { TabSwipe } from './modules/TabSwipe.js';

const displayScreenData = new DisplayScreenData('pageTop');
displayScreenData.addElement();
displayScreenData.displayData();

const modalDialog = new ModalDialog('modal-dialog');
modalDialog.showDialog();
modalDialog.hideDialog();
modalDialog.respondValue();

scrollSmooth();

const tab = new Tab('.tab-ui', ".tab[role='tab']", '.tabpanel-wrap', ".tabpanel[role='tabpanel']");
tab.setHeight();
tab.switchTabs();
tab.throttle();

// TabSwipe();