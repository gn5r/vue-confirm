export default {
  props: {
    "btn-align":
      "CSSのjustify-contentプロパティ\nstart,center,end,space-between,space-aroundが有効値です",
    btns: "アクションボタン",
    closeable: "ヘッダーに閉じるボタンを表示/非表示にするフラグ",
    dark: "ダークテーマを有効",
    "hide-header": "デフォルトで描画されるヘッダーを非表示",
    message: "メッセージテキスト",
    "model-value": "ダイアログを表示/非表示にするフラグ",
    "no-actions-divider":
      "メッセージとアクションボタン間の境界線を非表示にする",
    persistent: "ダイアログの外側をクリックしても閉じないようにする",
    title: "タイトルテキスト",
    "title-color": "ヘッダーの背景色",
    "title-text-color": "ヘッダーの文字色",
    width: "コンポーネントの横幅",
  },
  events: {
    "click:outside": "ダイアログの外側をクリックしたときに発火します",
    "update:modelValue": "更新されたバウンドモデル",
  },
  "copy-text": "テキストをコピー",
  "sass-vars": "SASS変数",
  usage: "使い方",
};
