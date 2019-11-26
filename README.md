# Pattern Library & Style Guide

## URL
https://ishimasar.github.io/pattern-library/dest/

## 構成

UI分類 (Components)
 1. Static Ui   - 静的UI： JavaScriptで動的処理などを付与しないベーシックなWeb UI。 List、Card、Navigation、Table、Image frame、Alertなど。
 2. Dynamic Ui  - 動的UI： JavaScriptで動的処理などを付与するインタラクティブなWeb UI。Accordion、Carousel、(Modal) Dialog、Tabなど。
 3. Form Ui     - フォームUI： Webフォームでユーザーが情報入力・送信する際に用いるためのUIパーツ。 Checkbox、Radio、Selectbox、Input fieldなど。
 4. Control     - コントロール系： ユーザーの操作に対し挙動や値をコントロールするためのUI。 Button、Switch(Toggle)、Sliderbarなど。
 5. Effect      - 演出・効果： CSSやJavaScriptを用いたモーション/アニメーション挙動UI。 Smooth scroll、Loading effectなど。
 6. Layout      - 配置・割付規則： Grid、Column、Flexboxなど。
 7. Typography  - 文字表現デザイン： 文字(書体、大きさ、字間、字数、行間、行数など)に関連するUI。 Heading、Body text、Noteなど。
 8. Utility     - 汎用パターン： 各UI間・中で柔軟に適用できるスタイル。 Space、Line、Shapeなど。

## 目的

- Web UIほかコードパーツのベースをストックし、引き出せるようにしておくことでの作業効率・速度の向上(車輪の再発明抑止)
- 都度コードのベストプラクティスを模索し、時流にあわせたフォーマット更新を継続することによる品質保持
- セマンティック/WAI-ARIA含むWebアクセシビリティおよびOOUI(Object-Oriented User Interface)を実践した、ユーザーにどこまでも寄り添ったコーディングプロダクトとなること

## 仕様・注記

- 本ライブラリ・スタイルガイドは、Web UIコードの土台、見本となるものを目指して作成しています。そのため、必要最低限のスタイリングと挙動によるシンプルなものを目指しており、制作現場ごとのコンテクストに応じて即適用できる便利なスニペットではないことをご承知ください
- 本ライブラリのコード、カスタマイズや個別改変・適用は自由ですが、セマンティック/Webアクセシビリティ/OOUIといった基本観点を崩す実装になっていないかやヒューマンリーダブルおよびマシンリーダブルの原則を考え続ける実装のきっかけになると幸いです
