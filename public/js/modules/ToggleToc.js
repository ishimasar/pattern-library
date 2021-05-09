export function toggleToc() {
  const detailsElement = document.querySelector('.toc-open');
  const summaryElement = document.querySelector('.toc-open > summary');

  if (detailsElement !== null) {
    detailsElement.addEventListener("toggle", () => {
      if (detailsElement.open) {
        summaryElement.innerHTML = '<span>[ 閉じる ]</span>'
      } else {
        summaryElement.innerHTML = '<span>[ 開く ]</span>'
      }
    });
  }
}
