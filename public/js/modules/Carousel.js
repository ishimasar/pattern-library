export class Carousel {
  constructor(triggerClass, img, thumb, prev, next, play, pause) {
    this.current = 0; // 現在地を示すインデックス番号：初期値0=1番目
    this.timerId; // setTimeout関数の戻り値(ID)。clearTimeoutに渡す用

    // カルーセル関連のNodeListを取得して変数に格納
    this.carouselCont = document.querySelectorAll(triggerClass); // .js-carousel-contをすべてカルーセルパネル(コンテンツ)とみなし、NodeList取得
    this.contArray = Array(...this.carouselCont); // 上記NodeListオブジェクトを扱いやすいよう配列に変換

    if(this.carouselCont.length > 0) {
      this.carouselImg = document.querySelectorAll(img);
      this.carouselThumb = document.querySelectorAll(thumb); // サムネイル(button要素 = role="tab")のDOM取得
    }

    // 前へボタンDOM取得変数
    this.prev = document.querySelector(prev);

    // 次へボタンDOM取得変数
    this.next = document.querySelector(next);

    // 再生ボタン、停止ボタンのDOM取得変数
    this.play = document.querySelector(play);
    this.pause = document.querySelector(pause);

    this.runFlg = false; // オートスライド実行中フラグ初期値
  }
  // ---メソッド---

  // カルーセルを表示([aria-hidden="false"]スタイル)
  showCarousel() {
    this.carouselCont[this.current].setAttribute('aria-hidden', 'false'); // 表示状態(ARIA)
    this.carouselCont[this.current].setAttribute('tabindex', '0'); // キーボードフォーカス可に

    // this.carouselImg[this.current].classList.add('is-motioned'); // スケールモーションclass付与 ※必要に応じてご利用ください

  }

  // カルーセルを非表示([aria-hidden="true"]スタイル)
  hideCarousel() {
    this.carouselCont[this.current].setAttribute('aria-hidden', 'true'); // 非表示状態(ARIA)
    this.carouselCont[this.current].setAttribute('tabindex', '-1'); // キーボードフォーカス不可に

    // this.carouselImg[this.current].classList.remove('is-motioned'); // スケールモーションclass削除 ※必要に応じてご利用ください
  }

  // サムネイル画像を非選択状態([aria-selected="false"]スタイル)
  removeCurrent() {
    this.carouselThumb[this.current].setAttribute('aria-selected', 'false'); // 非選択状態(ARIA)
  }

  // サムネイル画像を選択状態([aria-selected="false"]スタイル)
  addCurrent() {
    this.carouselThumb[this.current].setAttribute('aria-selected', 'true'); // 選択状態(ARIA)
  }

  // オートスライド再生
  playCarousel() {
    this.timerId = setTimeout(() => {
      this.next.click(); // 次へボタンクリックイベント呼び出し(buttonオブジェクトのメソッド)
      this.playCarousel(); // 再帰
    }, 3500);
  }

  // オートスライド停止
  stopCarousel() {
    clearTimeout(this.timerId);
  }

  // ---イベントおよびメソッド実行処理----
  setter() {
    if(this.carouselCont.length > 0) {
      // 格納したNodeListオブジェクトを配列として要素1つ1つにループ処理
      for (let i = 0; i < this.contArray.length; i++) {
        // カルーセルのメインコンテンツのマウンスエンターイベント
        this.carouselCont[i].addEventListener('mouseenter', () => {
          this.stopCarousel(); // 自動再生止める
        });

        // カルーセルのメインコンテンツのマウンスリーブイベント
        this.carouselCont[i].addEventListener('mouseleave', () => {
          // 再生ボタンオンなら再生、停止ボタンオンなら停止
          if (this.runFlg === true) {
            this.playCarousel();
          } else {
            this.stopCarousel();
          }
        });

        // カルーセルのメインコンテンツのキーボードフォーカスインイベント
        this.carouselCont[i].addEventListener('focus', () => {
          this.stopCarousel(); // 自動再生止める
        });

        // カルーセルのメインコンテンツのキーボードフォーカスアウトイベント
        this.carouselCont[i].addEventListener('blur', () => {
          // 再生ボタンオンなら再生、停止ボタンオンなら停止
          if (this.runFlg === true) {
            this.playCarousel();
          } else {
            this.stopCarousel();
          }
        });

        // thumbnailBtn(button要素)クリックイベント時に実行する関数群
        this.carouselThumb[i].addEventListener('click', () => {
          this.hideCarousel(this.contArray);
          this.removeCurrent();
          this.current = i; // currentにクリックされた要素のインデックス番号を格納
          this.addCurrent();
          this.showCarousel(this.contArray);
        });
      }

      // カルーセル画像 前へ(<)ボタン・クリックイベント
      this.prev.addEventListener('click', () => {
        this.hideCarousel(this.contArray[this.current]);
        this.removeCurrent(); // currentクラスを持つ要素から、currentクラスを削除する関数実行
        this.current--; // currentを1つ引く
        // currentが0未満の値になったときの戻る処理
        if (this.current < 0) this.current = this.contArray.length - 1; // currentを最大値にする(最終番目に移動する)
        this.addCurrent();
        this.showCarousel(this.contArray[this.current]);
      });

      // 前へボタン・マウスオンイベント
      this.prev.addEventListener('mouseenter', () => {
        this.stopCarousel();
      });

      // 前へボタン・マウスアウトイベント
      this.prev.addEventListener('mouseleave', () => {
        // 再生ボタンオンなら再生、停止ボタンオンなら停止
        if (this.runFlg === true) {
          this.playCarousel();
        } else {
          this.stopCarousel();
        }
      });

      // 前へボタン・キーボードフォーカスインイベント
      this.prev.addEventListener('focus', () => {
        this.stopCarousel();
      });

      // 前へボタン・キーボードフォーカスアウトイベント
      this.prev.addEventListener('blur', () => {
        // 再生ボタンオンなら再生、停止ボタンオンなら停止
        if (this.runFlg === true) {
          this.playCarousel();
        } else {
          this.stopCarousel();
        }
      });

      // カルーセル画像 次へ(>)ボタン・クリックイベント
      this.next.addEventListener('click', () => {
        this.hideCarousel(this.contArray[this.current]);
        this.removeCurrent();
        this.current++; // currentを1つ足す
        // currentが配列の数(最大数)と同じときの処理
        if (this.current === this.contArray.length) this.current = 0; // currentを0にする(1番目に戻す)
        this.addCurrent(); //
        this.showCarousel(this.contArray[this.current]);
      });

      // 次へボタン・マウスオンイベント
      this.next.addEventListener('mouseenter', () => {
        this.stopCarousel();
      });

      // 次へボタン・マウスアウトイベント
      this.next.addEventListener('mouseleave', () => {
        // 再生ボタンオンなら再生、停止ボタンオンなら停止
        if (this.runFlg === true) {
          this.playCarousel();
        } else {
          this.stopCarousel();
        }
      });

      // 次へボタン・キーボードフォーカスオンイベント
      this.next.addEventListener('focus', () => {
        this.stopCarousel();
      });

      // 次へボタン・キーボードフォーカスアウトイベント
      this.next.addEventListener('blur', () => {
        // 再生ボタンオンなら再生、停止ボタンオンなら停止
        if (this.runFlg === true) {
          this.playCarousel();
        } else {
          this.stopCarousel();
        }
      });

      // 再生ボタン・クリックイベント
      this.play.addEventListener('click', () => {
        this.play.setAttribute('aria-hidden', 'true');
        this.pause.setAttribute('aria-hidden', 'false');
        this.pause.focus(); // 停止ボタンにフォーカスさせる
        this.playCarousel();
        this.runFlg = true; // 再生フラグオン
      });

      // 停止ボタン・クリックイベント
      this.pause.addEventListener('click', () => {
        this.pause.setAttribute('aria-hidden', 'true');
        this.play.setAttribute('aria-hidden', 'false');
        this.play.focus(); // 再生ボタンにフォーカスさせる
        this.stopCarousel();
        this.runFlg = false; // 再生フラグオフ
      });
    }
  }
}