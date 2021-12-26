// 未完成
export function currentLocation() {
  const contents = document.querySelectorAll('.section');
  const toc = document.querySelectorAll('.toc__link');
  const tocMap = new Map();

  // IntersectionObserverでコンテンツの出入りを監視
  const intersectCallback = (entries) => {
    entries.forEach((element) => {
      if (element.intersectionRatio) {
        tocMap.get(element.target).classList.add('is-current');
      } else {
        tocMap.get(element.target).classList.remove('is-current');
      }
    });
  };
  // wrapperの上辺を現在地の基準点にしたいので、rootMarginで微調整
  const options = {
    root: document.querySelector('.section-wrap'),
    rootMargin: '-1px 0px -99% 0px',
  };
  const observer = new IntersectionObserver(intersectCallback, options);

  // コンテンツをIntersectionObserverに登録
  contents.forEach((content, i) => {
    observer.observe(content);
    tocMap.set(content, toc.item(i));
    tocMap.set(toc.item(i), content);
  });
}