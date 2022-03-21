/* 暫定コード */

export function currentLocation() {
  const root = document.querySelector('body');
  const boxes = document.querySelectorAll('.section');

  const options = {
    root: root ? null : null,
    rootMargin: '-1px 0px -50% 0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver(doWhenIntersect, options);
  // それぞれのboxを監視する
  boxes.forEach(box => {
    observer.observe(box);
  });

  /**
    * 監視している要素が交差したとき呼び出す関数
    * @param entries
    */
  function doWhenIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  /**
    * 目次上見出しの現在地classを付与する関数
    * @param element
    */
  function activateIndex(element) {
    // .is-currentが付与されている目次を選択
    const currentActiveIndex = document.querySelector('.toc .is-current');
    // .is-currentが付与されているものが0個の時（=null）以外は.is-currentを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove('is-current');
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、.is-currentを付与
    const newActiveIndex = document.querySelector(
      `a[href='#${element.id}']`
    );
    newActiveIndex.classList.add('is-current');
  }
}