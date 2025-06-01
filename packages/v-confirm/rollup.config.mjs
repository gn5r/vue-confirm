import pkg from "./package.json" with { type: "json" };

import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import sass from "rollup-plugin-sass";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

import alias from "@rollup/plugin-alias";

const extensions = [".ts", ".tsx", ".js", ".jsx", ".mjs"];
const banner = `/**
* ${pkg.name} v${pkg.version}
* Copyright (c) 2024 shangyuan.tuolang
* @license MIT
**/\n`;

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/v-confirm.esm.js",
        format: "es",
        sourcemap: true,
        banner,
      },
      {
        file: "dist/v-confirm.js",
        name: "v-confirm",
        format: "umd",
        globals: { vue: "Vue" },
        sourcemap: true,
        banner,
      },
      {
        file: "dist/v-confirm.min.js",
        name: "v-confirm",
        format: "umd",
        globals: { vue: "Vue" },
        plugins: [terser({ format: { ecma: 2025 } })],
        sourcemap: true,
        banner,
      },
    ],
    external: ["vue"],
    plugins: [
      nodeResolve({ extensions }),
      babel({ extensions, babelHelpers: "inline" }),
      sass({
        output(styles) {
          Promise.all([
            postcss([autoprefixer]).process(styles, { from: "src" }),
            postcss([
              autoprefixer,
              cssnano({
                preset: "default",
              }),
            ]).process(styles, { from: "src" }),
          ]).then((result) => {
            writeFile(
              fileURLToPath(new URL("dist/v-confirm.css", import.meta.url)),
              banner + result[0].css,
              "utf8"
            );
            writeFile(
              fileURLToPath(new URL("dist/v-confirm.min.css", import.meta.url)),
              banner + result[1].css,
              "utf8"
            );
          });
        },
      }),
      alias({
        entries: [
          {
            find: /^@\/(.*)/,
            replacement: fileURLToPath(new URL("src/$1", import.meta.url)),
          },
        ],
      }),
    ],
  },
];
