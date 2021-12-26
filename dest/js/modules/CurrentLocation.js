export function currentLocation() {
  const root = document.querySelector('body');
  const boxes = document.querySelectorAll('.section');

  const options = {
    root: root ? null : null,
    rootMargin: '-1px 0px -70% 0px',
    threshold: 0.2
  };

  console.log(options);

  const observer = new IntersectionObserver(doWhenIntersect, options);
  // それぞれのboxを監視する
  boxes.forEach(box => {
    observer.observe(box);
  });

  /**
    * 交差したときに呼び出す関数
    * @param entries
    */
  function doWhenIntersect(entries) {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }

  /**
    * 目次の色を変える関数
    * @param element
    */
  function activateIndex(element) {
    // すでにアクティブになっている目次を選択
    const currentActiveIndex = document.querySelector('.toc .is-current');
    // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove('is-current');
    }
    // 引数で渡されたDOMが飛び先のaタグを選択し、is-currentクラスを付与
    const newActiveIndex = document.querySelector(
      `a[href='#${element.id}']`
    );
    newActiveIndex.classList.add('is-current');
  }
}