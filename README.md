## パターンライブラリ & スタイルガイドについて

Webサイト・アプリ制作で使用されるUIやスタイルのコード見本・サンプル集です。  
コーディングの参考、UI等の設計・作成方針の土台にでき、その上で作業効率にも寄与できるようなものを目指します。

URLはこちら。※現在は随時、コード作成追加中。  
[https://ishimasar.github.io/pattern-library/dest/](https://ishimasar.github.io/pattern-library/dest/)

よければ拙作コーディングガイドライン & 命名規則もあわせてご参照ください。※こちらもまだ詳細は今後作成予定。  
[https://ishimasar.github.io/coding-guidelines/](https://ishimasar.github.io/coding-guidelines/)

## 目的

- コーディングの基本原則の確認、UI等の設計・作成方針の参考または手がかりにできる
- ベースとなるWeb UIコードをストックし、自由に取り出せることで作業効率・速度を向上(車輪の再発明抑止)
- ベストプラクティスを都度模索し、最適なフォーマット更新を継続することによる品質の保持、向上
- セマンティック/Webアクセシビリティ(WAI-ARIA含む)およびOOUI(Object-Oriented User Interface)を考え実践した、インクルーシブなコーディングプロダクトの実現

## 構成

UI分類 (Components)
 1. **Static Ui**  
   静的UI：JavaScriptでDOM操作など動的処理を付与しないWeb UI。List、Card、Tableなど。
 2. **Dynamic Ui**  
   動的UI：JavaScriptで動的処理を付与したインタラクティブWeb UI。Carousel、Dialog、Tabなど。
 3. **Form Ui**  
   フォームUI：ユーザーが情報入力・送信する際に用いるUI。Checkbox、Radio、Input fieldなど。
 4. **Control**  
   コントロール系：ユーザー操作で挙動や値をコントロールするUI。Button、Switch、Sliderなど。
 5. **Effect**  
   演出・効果：CSSやJavaScriptを用いたモーション、UI。Smooth scroll、Loading effectなど。
 6. **Layout**  
   配置・割付規則：空間上に要素を配置する際の手法、法則。Grid、Column、Flexboxなど。
 7. **Typography**  
   文字表現：文字や書体、サイズ、字間、行間などに関連するUI。Heading、Body textなど。
 8. **Utility**  
   汎用パターン：各UI間・内で柔軟に適用できるスタイル。 Space、Line、Shapeなど。

## 仕様・注記

本ライブラリはWeb UIコードの土台またはひとつの見本となることを目指し作成しています。そのため、必要最低限のスタイリングと挙動でコーディングしたシンプルなUI集となっています。制作現場ごとの多様なコンテクストに応じ、即適用や容易なカスタマイズを目的とした便利スニペットではないことをご承知ください。

コードのカスタマイズや個別に改変しての適用はご自由にどうぞ。しかしながら、それによりセマンティック/Webアクセシビリティ/OOUIといった基本観点を崩す実装になっていないかのチェック意識や、ヒューマンリーダブルおよびマシンリーダブルの原則を見つめるきっかけになると良いなあと運営者は考えています。

## 制作・運営

石井 将直 / Masanao Ishii (Cloudy knot)
