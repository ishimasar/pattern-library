## URL
[https://ishimasar.github.io/pattern-library/dest/](https://ishimasar.github.io/pattern-library/dest/)

## 構成

UI分類 (Components)
 1. **Static Ui**  
   静的UI：JavaScriptでDOM操作など動的処理を付与しない静的なWeb UI。List、Card、Tableなど。
 2. **Dynamic Ui**  
   動的UI：JavaScriptで動的処理を付与するインタラクティブなWeb UI。Carousel、Dialog、Tabなど。
 3. **Form Ui**  
   フォームUI：Webフォームでユーザーが情報入力・送信する際に用いるUI。Checkbox、Radio、Input fieldなど。
 4. **Control**  
   コントロール系： ユーザー操作により挙動や値をコントロールするためのUI。Button、Switch、Sliderbarなど。
 5. **Effect**  
   演出・効果：CSSやJavaScriptを用いたモーション/アニメーション挙動UI。Smooth scroll、Loading effectなど。
 6. **Layout**  
   配置・割付規則：空間上に要素を配置する際の手法、法則。Grid、Column、Flexboxなど。
 7. **Typography**  
   文字表現デザイン：文字関連(書体、大きさ、字間、字数、行間、行数など)のUI。Heading、Body text、Noteなど。
 8. **Utility**  
   汎用パターン：各UI間・中で柔軟に適用できるスタイル。 Space、Line、Shapeなど。

## 目的

- ベースとなるWeb UIコードをストックし、自由に取り出せるようにすることで作業効率・速度を向上(車輪の再発明抑止)
- ベストプラクティスを都度模索し、最適なフォーマット更新を継続することによる品質保持
- セマンティック/Webアクセシビリティ(WAI-ARIA含む)およびOOUI(Object-Oriented User Interface)を考え実践した、多くのユーザーに寄り添ったインクルーシブなコーディングプロダクトの実現

## 仕様・注記

本ライブラリはWeb UIコードの土台、ひとつの見本となることを目指し作成しています。そのため、必要最低限のスタイリングと挙動でコーディングしたシンプルなUI集となっています。制作現場ごとの多様なコンテクストに応じ、即適用やカスタマイズを目的とした便利なスニペットではないことをご承知ください。

コードのカスタマイズや個別に改変しての適用はご自由にどうぞ。しかしながら、それによってセマンティック/Webアクセシビリティ/OOUIといった基本観点を崩す実装になっていないかのチェック意識や、ヒューマンリーダブルおよびマシンリーダブルの原則を見つめるきっかけになると良いなと運営者は考えています。
