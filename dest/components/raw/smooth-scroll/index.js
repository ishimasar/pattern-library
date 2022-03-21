/* /js/modules/SmoothScroll.js */

export function scrollSmooth() {

  // スクロール移動時間(ms)
  const transitionTime = 500;
  // 繰り返す回数(アニメーションの回数）の計算
  const endTime = transitionTime / 1000 * 60;

  // easing計算式 -> easeInOutQuad
  const easing = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  };

  // 移動関数(スムーズアニメーション実行関数)
  function pageScroll(pos) {
    let xPos = window.pageXOffset; // 画面横位置
    let yPos = window.pageYOffset; // 画面縦位置
    let moved = pos - yPos; // 移動距離
    let time = 1;
    (function scrollMoved() {
      window.scrollTo(xPos, easing(time, yPos, moved, endTime));
      time++ ;
      if (time <= endTime) {
        window.requestAnimationFrame(scrollMoved);
      }
    })();
  }

  // hashからelementを取得する関数
  function getElm(h) {
    let deCode = decodeURI(h);
    return document.querySelector( deCode + ',a[name="' + deCode.substr(1)  + '"]');
  }

  // 移動先の位置を取得する関数
  function getPos(t) {
    let tPos = t.getBoundingClientRect();
    return tPos.top + window.pageYOffset;
  }

  // ページ内リンクを取得
  const entryPageLinks = document.querySelectorAll('.js-smooth-scroll a[href^="#"]');
  const toc = document.querySelectorAll('.toc__link');
  const section = document.querySelectorAll('.section');

  // ページ内リンクにイベントを登録
  if (entryPageLinks.length) {
    for(var i = 0; entryPageLinks.length > i; i++) {
      entryPageLinks[i].addEventListener('click', (e)  => {
        let href = e.target.hash;
        if ( (href != '') && (href != '#')) {
          let targetElm = getElm(href);
          if (targetElm) {
            (e.preventDefault) ? e.preventDefault(): e.returnValue = false;
            pageScroll(getPos(targetElm));
            targetElm.setAttribute('tabindex', '0');
            targetElm.focus();
            targetElm.addEventListener('blur', () => {
              targetElm.removeAttribute('tabindex');
            });
            for(let i = 0; toc.length > i; i++) {
              if (href === toc[i].hash) {
                toc[i].classList.add('is-current');
              } else {
                toc[i].classList.remove('is-current');
              }
            }
            for(let j = 0; section.length > j; j++) {
              if (targetElm !== section[i]) {
                section[j].removeAttribute('tabindex');
              }
            }
            return false;
          }
        }
      });
    }
  }
}

/* /js/modules/CurrentLocation.js */
/* 暫定コード */

export function currentLocation() {
  const root = document.querySelector('body');
  const boxes = document.querySelectorAll('.section');

  const options = {
    root: root ? null : null,
    rootMargin: '-1px 0px -70% 0px',
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

/* /js/main.js */
import { currentLocation } from './modules/CurrentLocation.js';
import { scrollSmooth } from './modules/SmoothScroll.js';

currentLocation();
scrollSmooth();