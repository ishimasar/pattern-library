export function toggleToc() {
  const detailsElement = document.querySelector('.toc-open');
  const summaryText = document.querySelector('.toc-open .summary-text');

  if (detailsElement !== null) {
    detailsElement.addEventListener("toggle", () => {
      if (detailsElement.open) {
        summaryText.innerText = '[ 閉じる ]'
      } else {
        summaryText.innerText = '[ 開く ]'
      }
    });
  }
}
