## CLI_boilerplate

### 脱gulp,gruntのための環境構築

### 開発スタート
$ npm i

npmscriptsのpostinstallにbuildタスクとwatchタスクが設定してありますので、
install完了後に自動的にbuildとwatchタスクが走ります。


### build

$ npm run build

こちらのコマンドでフォルダのクリーン、cssのビルド、jsのビルド,画像の圧縮　を行い、dist配下に出力します。
「npm-run-all」を使用し、css,js,imageの各種buildタスクをまとめて実行しています。


### watch
$ npm run watch  

こちらのコマンドで各ファイルを監視モードにし、変更があった場合、  
ビルド処理を行いその処理が終了したタイミングでブラウザがリロードされます。
「npm-run-all」を使用し、css,js,imageの各種watchタスクをまとめて実行しています。


### アップデート予定

・ステージング環境、本番環境への出力を分岐させる
・replaceで環境ごとにパスの書き換え
