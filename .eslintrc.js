module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  extends: [
    "eslint:recommended", // ESLintで基本的なルールチェック(更に細かく個別指定可)
    "plugin:prettier/recommended" // 一番下に書かないとうまく動かない場合も
  ],
  plugins: [],
  // ここにカスタムルールを追加する
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true, // シングルクォーテーションのフォーマット
        "semi": true // セミコロンのフォーマット
      }
    ],
  }
}