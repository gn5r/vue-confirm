export default {
  data: () => ({
    // Confirm用オブジェクト
    confirmObj: {
      dialog: false,
      title: "",
      titleIcon: "",
      titleColor: "",
      message: "",
      buttons: [],
    },
  }),

  // 関数定義
  methods: {
    /**
     * 確認用ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {function} callback "はい"を押した後のコールバック関数
     */
    confirm(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "確認";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "#2196f3";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "#2196f3",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "#ff5252",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    /**
     * 警告ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     * @param {function} callback "はい"を押した後のコールバック関数
     */
    warning(message, callback = null) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "警告";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "#fb8c00";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "#2196f3",
          function: () => {
            this.close();
            if (callback !== null && typeof callback === "function") callback();
          },
        },
        {
          text: "いいえ",
          color: "#ff5252",
          function: this.close,
        },
      ];

      // パラメーターの設定後、ダイアログを表示する
      this.open();
    },

    /**
     * エラーダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    error(message) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "エラー";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "#ff5252";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "#2196f3",
          function: this.close,
        },
      ];
      this.open();
    },

    /**
     * 処理完了ダイアログを表示する
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    complete(message) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "完了";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "#4caf50";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "#2196f3",
          function: this.close,
        },
      ];
      this.open();
    },

    /**
     * vue-common-confirm版alert関数
     * @param {String} message ダイアログ内に表示するメッセージ
     */
    modal(message) {
      // ダイアログを表示するためのパラメーター設定
      this.confirmObj.title = "";
      this.confirmObj.titleIcon = "";
      this.confirmObj.titleColor = "";
      this.confirmObj.message = message;
      this.confirmObj.buttons = [
        {
          text: "はい",
          color: "#2196f3",
          function: this.close,
        },
      ];
      this.open();
    },

    // ダイアログを表示する
    open() {
      this.confirmObj.dialog = true;
    },
    // ダイアログを閉じる
    close() {
      this.confirmObj.dialog = false;
    },
  },
};
