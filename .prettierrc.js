/* reference: https://prettier.io/docs/en/options.html */
module.exports = {
  printWidth: 120, // 折り返す行の長さを指定
  // tabWidth: 2, // インデントのスペースの数を指定
  // useTabs: false, // スペースではなくタブで行をインデントする
  // semi: false, // ステートメントの最後にセミコロンを追加
  // singleQuote: true, // ダブルクォートの代わりにシングルクォートを使用(JSX quotesはこの項目を無視する)
  // quoteProps: 'as-needed', // オブジェクトのプロパティが引用されるときに変更
  // jsxSingleQuote: false, // JSXでダブルクォートの代わりにシングルクォートを使用
  // trailingComma: 'es5', // 末尾のカンマの設定
  // bracketSpacing: true, // オブジェクトリテラルの角かっこの内側にスペースを入れる
  // jsxBracketSameLine: false, // 複数行のJSX要素の最終行の最後に「>」を置く
  // arrowParens: 'always', // アロー関数の()が省略可能でも常に書く
  // jsxBracketSameLine: false, // [非推奨]複数行のJSX要素の最終行の最後に「>」を置く
  // arrowParens: avoid, // アロー関数の()を書くか
  // rangeStart: 0, // ファイルの一部のセグメントのみフォーマットさせる
  // rangeEnd: Infinity,
  // parser: none; // 使用するパーサーを指定
  // filepath: none, // 使用するパーサーを推測するために使用するファイル名を指定
  // requirePragma: false, // ファイルの先頭にプラグマ(/** @format */)を含むファイルのみをフォーマットするように指定
  // insertPragma: false, // ファイルの先頭にプラグマ(/** @format */)を挿入する
  // proseWrap: 'preserve', // markdownの折返しの設定
  // htmlWhitespaceSensitivity: "css", // HTMLファイルのグローバルな空白の感度を指定
  // vueIndentScriptAndStyle: false, // Vueファイル内の<script>と<style>をインデントするかの指定
  // endOfLine: 'lf', // 改行の文字コードを指定
  // embeddedLanguageFormatting: 'auto', // ファイルに埋め込まれた引用コードをフォーマットするかどうかを制御
  overrides: [
    {
      files: '*.html',
      options: {},
    },
    {
      files: '*.css',
      options: {},
    },
    {
      files: '*.js',
      options: {
        trailingComma: 'es5',
        arrowParens: 'always',
        singleQuote: true,
      },
    },
  ],
};
