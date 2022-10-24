module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss', 'stylelint-prettier'],
  extends: [
    // 'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    indentation: null,
    'color-hex-case': 'lower', // hex値は小文字指定(大文字を禁止)
    'color-hex-length': 'short', // hex値は短い表記(冗長な表記は禁止)
    'color-named': 'never', // 名前付きカラー指定を禁止
    'color-no-invalid-hex': true, // 無効な16進数の色指定を禁止
    'function-comma-space-after': 'always-single-line', // 単一行のカンマ後には空白が必要
    'function-comma-space-before': 'never', // カンマ前の空白を禁止
    'number-leading-zero': 'always', // 「0.*」の0は省略し許可しない(.*のようにする)
    'number-no-trailing-zeros': true, // 小数点以下の末尾0を禁止
    'string-no-newline': true, // 文字列の改行を禁止
    'string-quotes': 'double', // '指定(''を禁止)
    'length-zero-no-unit': true, // 0の時の右記単位指定を禁止(em,ex,ch,vw,vh,cm,mm,in,pt,pc,px,rem,vmin,vmax)
    'unit-case': 'lower', // 単位は小文字指定(大文字を禁止)
    'unit-no-unknown': true, // 不明な単位を禁止
    'value-no-vendor-prefix': null, // ベンダープレフィックスを禁止(autoprefixerの使用前提)
    'value-list-comma-newline-after': null, // 値リストのカンマ後に改行は許可し改行後のカンマは禁止
    'value-list-comma-space-after': 'always-single-line', // 値リストの単一行のカンマ後には空白が必要
    'value-list-comma-space-before': 'never', // 値リストのカンマ前の空白を禁止
    'shorthand-property-no-redundant-values': true, // 省略形のプロパティで重複する値を許可しない
    'property-case': 'lower', // プロパティは小文字指定(大文字を禁止)
    'property-no-vendor-prefix': null, // プロパティのベンダープレフィックスを禁止(autoprefixerの使用前提)
    'declaration-bang-space-after': 'never', // 宣言後の空白を禁止
    'declaration-bang-space-before': 'always', // 宣言前の空白を必須
    'declaration-colon-newline-after': null, // 複数行の時のコロン後には改行が必須
    'declaration-colon-space-after': 'always-single-line', // 単一行の時のコロン後に空白が必須
    'declaration-colon-space-before': 'never', // コロン前の空白を禁止
    'declaration-block-no-duplicate-properties': [
      // 宣言ブロック内で重複するプロパティを禁止
      null,
      {
        ignore: [
          'consecutive-duplicates', // 連続する場合は許可(レガシーブラウザ対応で記述する場合がある為)
        ],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': null, // ショートハンドで値の上書き禁止
    'declaration-block-semicolon-newline-after': 'always-multi-line', // セミコロン後に改行が必須(セレクタ含め一行の場合は容認)
    'declaration-block-semicolon-newline-before': 'never-multi-line', // セミコロン前の空白・改行を禁止
    'declaration-block-semicolon-space-after': 'always-single-line', // 単一行の時のセミコロン後に空白が必須
    'declaration-block-semicolon-space-before': 'never', // セミコロン前の空白を禁止
    'declaration-block-trailing-semicolon': 'always', // 末尾のセミコロンを必須
    'block-closing-brace-empty-line-before': 'never', // 閉じ括弧前の空行を禁止
    'block-closing-brace-newline-after': [
      'always', // 閉じ括弧後の改行を必須
      {
        ignoreAtRules: ['if', 'else'], // Sassのif文は適用除外
      },
    ],
    'block-closing-brace-newline-before': 'always-multi-line', // 複数行の時に閉じ括弧前に改行を必須
    'block-opening-brace-space-after': 'always-single-line', // 単一行の時に閉じ括弧後に空白を必須
    'block-opening-brace-space-before': 'always', // 単一行で閉じ括弧前に空白を必須
    'selector-attribute-brackets-space-inside': 'never', // 属性セレクタ内の括弧の内側の空白を禁止
    'selector-attribute-operator-space-after': 'never', // 属性セレクタ内の演算子の後の空白を禁止
    'selector-attribute-operator-space-before': 'never', // 属性セレクタ内の演算子の前の空白を禁止
    // 'selector-attribute-quotes': 'always', // 属性値の引用符を必須
    'selector-combinator-space-after': 'always', // コンビネータ後に空白を必須
    'selector-combinator-space-before': 'always', // コンビネータ前に空白を必須
    'selector-descendant-combinator-no-non-space': true, // 下位コンビネータの空白以外を禁止
    // 'selector-max-compound-selectors': 3, // セレクタ内の複合セレクタ数を制限
    // 'selector-max-specificity': '0,4,0', // 'id,class,type'でセレクタの特異性を制限
    'selector-max-empty-lines': 1, // セレクタ内の隣接する空行の数を制限
    'selector-pseudo-class-case': 'lower', // 擬似セレクタは小文字指定(大文字は禁止)
    'selector-pseudo-class-parentheses-space-inside': 'never', // 擬似セレクタ内の括弧の内側の空白を禁止
    // 'selector-type-case': 'lower', // セレクタは小文字(大文字は禁止)
    'selector-list-comma-newline-after': null, // セレクタリストのカンマの後に改行を必須
    'selector-list-comma-newline-before': null, // セレクタリストのカンマの前の空白を禁止
    'selector-list-comma-space-before': 'never', // セレクタリストのカンマの前の空白を禁止
    'selector-type-no-unknown': null,
    'media-feature-colon-space-after': null, // メディアクエリ内のコロンの後の空白を指定
    'media-feature-colon-space-before': 'never', // メディアクエリ内のコロンの前の空白を禁止
    'media-feature-name-case': 'lower', // メディアクエリの小文字指定(大文字を禁止)
    'media-feature-parentheses-space-inside': 'never', // メディアクエリの括弧内側の空白を禁止
    'media-feature-range-operator-space-after': 'always', // メディアクエリ内の範囲演算子の後の空白を指定
    'media-feature-range-operator-space-before': 'always', // メディアクエリ内の範囲演算子の前の空白を指定
    'media-query-list-comma-newline-after': 'always-multi-line', // メディアクエリの複数行の時はカンマの後に改行を必須
    'media-query-list-comma-newline-before': 'never-multi-line', // メディアクエリの複数行の時はカンマの前に空白を必須
    'media-query-list-comma-space-after': 'always-single-line', // メディアクエリのカンマの後に改行を必須
    'media-query-list-comma-space-before': 'never', // メディアクエリのカンマの前の空白を禁止
    // 'at-rule-blacklist': ['extend'], // 禁止する@ルールを指定
    'at-rule-name-case': 'lower', // @ルールは小文字指定(大文字を禁止)
    'at-rule-name-space-after': 'always-single-line', // @ルールで単一行の時は@ルール名の後に空白を必須
    'at-rule-semicolon-newline-after': 'always', // @ルールでセミコロンの後に改行を必須
    'comment-whitespace-inside': 'always', // コメントの内側に空白を必須
    'max-empty-lines': 2, // 隣接する空行を制限
    'no-extra-semicolons': true, // 余分なセミコロンを禁止
    // 'no-missing-end-of-source-newline': true, // 行末の改行を必須
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'font-family-no-missing-generic-family-keyword': true,
    'order/order': [
      'at-rules',
      {
        type: 'at-rule',
        name: 'charset',
      },
      {
        type: 'at-rule',
        name: 'import',
      },
      'custom-properties',
      'declarations',
      {
        type: 'at-rule',
        name: 'keyframes',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'media',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'extend',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'return',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'if',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'else if',
        hasBlock: true,
      },
      {
        type: 'at-rule',
        name: 'else',
        hasBlock: true,
      },
      'rules',
    ],
    'order/properties-order': [
      'content',
      // 視覚整形モデル
      'display',
      'flex',
      'flex-align',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-order',
      'flex-pack',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      'gap',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas',
      'grid-template',
      'grid-auto-rows',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid',
      'grid-row-start',
      'grid-column-start',
      'grid-row-end',
      'grid-column-end',
      'grid-row',
      'grid-column',
      'grid-area',
      'columns',
      'column-width',
      'column-count',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-fill',
      'list-style',
      'list-style-type',
      'list-style-position',
      'list-style-image',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'float',
      'clear',
      'z-index',
      // ボックスモデル
      'width',
      'height',
      'max-width',
      'max-height',
      'min-width',
      'min-height',
      'margin',
      'margin: {',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'margin-collapse',
      'margin-top-collapse',
      'margin-right-collapse',
      'margin-bottom-collapse',
      'margin-left-collapse',
      'margin-block-start',
      'margin-block-end',
      'margin-inline-start',
      'margin-inline-end',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      // 背景
      'background',
      'background-attachment',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      // 表
      'table-layout',
      'border-collapse',
      'border-spacing',
      'empty-cells',
      'caption-side',
      // フォント
      'writing-mode',
      'vertical-align',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-size-adjust',
      'text-shadow',
      'text-transform',
      'line-height',
      'font',
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
      'font-smoothing',
      '-webkit-font-smoothing',
      'font-feature-settings',
      'font-display',
      'font-size-adjust',
      'font-stretch',
      'font-valiant',
      'hyphens',
      'src',
      'letter-spacing',
      'word-spacing',
      'word-break',
      'overflow-wrap',
      'word-wrap',
      'white-space',
      'color',
      // 描画・表示
      'opacity',
      'visibility',
      'overflow',
      'overflow-x',
      'overflow-y',
      // 装飾・CSS3表現(エフェクト)系
      'transform',
      'transform-style',
      'perspective',
      'border-radius',
      'border-top-right-radius',
      'border-bottom-right-radius',
      'border-bottom-left-radius',
      'border-top-left-radius',
      'border-radius-topright',
      'border-radius-bottomright',
      'border-radius-bottomleft',
      'border-radius-topleft',
      'border-image',
      'border-image-source',
      'border-image-slice',
      'border-image-width',
      'border-image-outset',
      'border-image-repeat',
      'box-align',
      'box-flex',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'filter',
      'backdrop-filter',
      'object-fit',
      'object-position',
      'image-orientation',
      'image-rendering',
      'image-resolution',
      'aspect-ratio',
      'clip',
      'clip-path',
      'background-clip',
      'backface-visibility',
      'mix-blend-mode',
      'background-blend-mode',
      'isolation',
      'marquee',
      'mask-image',
      'mask-mode',
      'mask-repeat',
      'mask-position',
      'mask-clip',
      'mask-origin',
      'mask-size',
      'mask-composite',
      // アニメーション
      'animation',
      'animation-delay',
      'animation-duration',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-timing-function',
      'animation-fill-mode',
      'transition',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      // 生成内容・ユーザーインターフェース
      'quotes',
      'counter-increment',
      'counter-reset',
      'outline',
      'outline-color',
      'outline-style',
      'outline-width',
      'outline-offset',
      'cursor',
      'resize',
      'pointer-events',
      // そのほか
      'appearance',
      'user-select',
      'interpolation-mode',
      'direction',
      'marks',
      'page',
      'page-break-before',
      'page-break-after',
      'page-break-inside',
      'widows',
      'set-link-source',
      'unicode-bidi',
      'speak',
      'scroll-behavior',
      'scroll-snap-type',
      'scroll-snap-align',
      'scroll-snap-stop',
      'will-change',
      // SVG
      'fill',
      'fill-opacity',
      'stroke',
      'stroke-opacity',
      'stroke-width',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
    ],
  },
};
