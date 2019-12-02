'use strict';

// fractalインスタンスを作成してエクスポート
const fractal = module.exports = require('@frctl/fractal').create();
// プロジェクト関連のメタデータ設定
fractal.set('project.title', 'Pattern Library by Cloudy knot');
fractal.set('project.author', 'masa ishii');
// コンポーネントの設定
fractal.components.set('path', __dirname + '/src/components');
// ドキュメントページの設定
fractal.docs.set('path', __dirname + '/src/docs');
// 静的ファイルの設定
fractal.web.set('static.path', __dirname + '/public');
// テーマの設定
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
  "styles": [
    "default",
    "/css/styleguide.css"
  ]
});
fractal.web.theme(myCustomisedTheme);
// HTMLの生成
fractal.web.set('builder.dest', __dirname + '/dest');