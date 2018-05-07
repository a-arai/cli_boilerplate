## CLI_boilerplate

### ejs,postCss,browserify,babelify,npm-run-all,chokidar...
grunt、gulp、webpackを使わない環境構築
小規模の静的サイトのボイラープレートとして・・・

好みや案件内容で追加で設定するべきもの

・lint
・sprite（spritesmith)を使う場合はpostCssではなくnode-sassを使う
・シェルファイルにコマンドまとめる

### 開発スタート
$ npm i

npmscriptsのpostinstallにbuildタスクとwatchタスクが設定してありますので、
install完了後に自動的にローカルサーバーが立ち上がりbuildとwatchタスクが走ります。


### build

$ npm run build

こちらのコマンドでフォルダのクリーン、ejsのビルド、postCssのビルド、jsのビルド、 画像の圧縮、を行い、dist配下に出力します。
「npm-run-all」を使用し、css,js,imageの各種buildタスクをまとめて実行しています。


### watch
$ npm run watch  

こちらのコマンドで各ファイルを監視モードにし、変更があった場合、  
ビルド処理を行いその処理が終了したタイミングでブラウザがリロードされます。
「npm-run-all」を使用し、css,js,imageの各種watchタスクをまとめて実行しています。


### clean
$ npm run clean

こちらのコマンドでdist配下のファイルを削除します。
buildタスクに含まれているので、単体で使用することは基本的にはありません。

