module.exports = {
  transpileDependencies: ["vuetify"],
  //開発中時の設定
  devServer: {
    //ポートを80で起動
    port: 80,
  },
  // Demo成果物出力ディレクトリ名
  outputDir: "docs",

  // 本webアプリのurl的なやつ
  publicPath: "./",

  // 画像ファイルなどにハッシュ値を付与しない
  filenameHashing: false,
};
