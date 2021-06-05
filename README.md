## パターンライブラリ & スタイルガイドについて

Webサイト・アプリ制作で使用されるUIやスタイルのコード見本・サンプル集です。
コーディングの参考、UI等の設計・作成方針の土台にでき、その上で作業効率にも寄与できるようなものを目指します。

また、JavaScriptは近い将来各種フレームワークやライブラリ、alt言語などが技術の変遷によって陳腐化する傾向とリスクを持つため、これに備え基本的に言語ネイティブのJavaScriptかつES6以降の記法で記述することを旨とします(スーパーセット利用は許容)。

該当URLはこちら

[https://ishimasar.github.io/pattern-library/dest/](https://ishimasar.github.io/pattern-library/dest/)

※このプロジェクトは、コンポーネント ライブラリ&スタイルガイドツール「<a src="https://fractal.build/" target="_blank" rel="noopener">Fractal</a> (外部リンク)」を利用しています

**コーディングガイドライン & 命名規則**もあわせてご参照ください

[https://ishimasar.github.io/coding-guidelines/](https://ishimasar.github.io/coding-guidelines/)

## 目的

- コーディングの基本原則の確認、UI等の設計・作成方針の参考または手がかりにできる
- ベースとなるWeb UIコードをストックし、自由に取り出せることで作業効率・速度を向上(車輪の再発明抑止)
- ベストプラクティスを都度模索し、最適なフォーマット更新を継続することによる品質の保持、向上
- <a src="https://www.w3.org/standards/semanticweb/" target="_blank" rel="noopener">セマンティック</a> / <a src="https://developer.mozilla.org/ja/docs/Web/Accessibility" target="_blank" rel="noopener">Webアクセシビリティ</a>(<a src="WAI-ARIA" target="_blank" rel="noopener">WAI-ARIA</a>含む)および<a src="https://en.wikipedia.org/wiki/Object-oriented_user_interface" target="_blank" rel="noopener">OOUI(Object-Oriented User Interface)</a>などの原理を考え実践した、インクルーシブなコーディングプロダクトの実現　※前述参照リンク先はすべて外部リンク

## 使い方・参照方法

Components(UI)詳細画面の下部エリアに共通ドキュメントタブ(HTML、View、Context..等)が表示されます。おもに「View」タブ内からHTML、「Asset」タブ内からCSS、JavaScript(使用されている場合)のファイル名(style.css、index.js)をSelect boxから選ぶことでコード参照できます。ほかのFractalデフォルトタブは特に利用していません。ご自由に参照利用ください。

<img src="https://ishimasar.github.io/pattern-library/dest/img/guidance-image.png" class="carousel__img is-motioned" alt="スライドパネルのコンテンツ画像1" decoding="async">

背景技術として、HTMLテンプレートエンジンはHandlebars(Fractalデフォルト)、CSSはSass、JavaScriptはネイティブ(拡大に伴いTypeScriptへ移行中)を利用しています。

## 構成

UI分類 (Components)
 1. **Static Ui**<br>
   静的UI：JavaScriptでDOM操作など動的処理を付与しないWeb UI。List、Card、Tableなど
 2. **Dynamic Ui**<br>
   動的UI：JavaScriptで動的処理を付与したインタラクティブWeb UI。Carousel、Dialog、Tabなど
 3. **Form Ui**<br>
   フォームUI：ユーザーが情報入力・送信する際に用いるUI。Checkbox、Input field、Radioなど
 4. **Control**<br>
   コントロール系：ユーザー操作で挙動や値をコントロールするUI。Button、Slider、Switchなど
 5. **Effect**<br>
   演出・効果：CSSやJavaScriptを用いたモーション、UI。Smooth scroll、Loading effectなど
 6. **Layout**<br>
   配置・割付規則：空間上に要素を配置する際の手法、法則。Column、Flexbox、Gridなど
 7. **Typography**<br>
   文字表現：文字や書体、サイズ、字間、行間などに関連するUI。Body text、Headingなど
 8. **Utility**<br>
   汎用パターン：各UI間・内で柔軟に適用できるスタイル。 Display、Shapeなど

## 仕様・注記

本ライブラリはWeb UIコードの土台またはひとつの見本となることを目指し作成しています。そのため、必要最低限のスタイリングと挙動でコーディングしたシンプルなUI集となっています。制作現場ごとの多様なコンテクストに応じ、即適用や容易なカスタマイズを目的とした便利スニペットではないことをご承知ください。

コードのカスタマイズや個別に改変しての適用はご自由にどうぞ。しかしながら、それによりセマンティック/Webアクセシビリティ/OOUIといった基本観点を崩す実装になっていないかのチェック意識や、ヒューマンリーダブルおよびマシンリーダブルの原則を見つめるきっかけになると良いなあと運営者は考えています。

## 制作・運営

石井 将直 / Masanao Ishii (Cloudy knot)