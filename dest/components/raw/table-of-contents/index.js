/* /js/modules/ToggleToc.js */

export function toggleToc() {
  const detailsElement = document.querySelector('.toc-open');
  const summaryElement = document.querySelector('.toc-open > summary');

  detailsElement.addEventListener("toggle", () => {
    if (detailsElement.open) {
      summaryElement.innerHTML = '<span>[ 閉じる ]</span>'
    } else {
      summaryElement.innerHTML = '<span>[ 開く ]</span>'
    }
  });
}

/* /js/main.js */

import { toggleToc } from './modules/ToggleToc.js';

toggleToc();