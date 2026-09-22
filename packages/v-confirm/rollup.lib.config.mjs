// @ts-check

import { readdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

import { nodeResolve } from "@rollup/plugin-node-resolve";
import vueJsx from "@vitejs/plugin-vue-jsx";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import alias from "@rollup/plugin-alias";

const extensions = [".ts", ".tsx", ".js", ".jsx", ".mjs"];

/**
 * Recursively find files matching extension
 * @param {string} dir
 * @param {string[]} exts
 * @returns {string[]}
 */
function getFiles(dir, exts) {
  /** @type {string[]} */
  let results = [];
  const list = readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const fullPath = join(dir, file.name);
    if (file.isDirectory()) {
      if (file.name !== "__tests__" && file.name !== "node_modules") {
        results = results.concat(getFiles(fullPath, exts));
      }
    } else if (exts.some((ext) => file.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

const inputFiles = getFiles(fileURLToPath(new URL("src", import.meta.url)), [
  ".ts",
  ".tsx",
]);

export default [
  {
    input: inputFiles,
    output: {
      dir: "lib",
      format: "es",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].mjs",
      sourcemap: true,
    },
    /**
     * @param {string} id
     * @returns {boolean}
     */
    external: (id) => {
      if (id === "vue" || id.startsWith("vue/")) return true;
      if (id.startsWith("@mdi/js")) return true;
      if (id.endsWith(".scss") || id.endsWith(".sass") || id.endsWith(".css")) {
        return true;
      }
      return false;
    },
    plugins: [
      alias({
        entries: [
          {
            find: /^@\/(.*)/,
            replacement: fileURLToPath(new URL("src/$1", import.meta.url)),
          },
        ],
      }),
      nodeResolve({ extensions }),
      vueJsx(),
      typescript({
        tsconfig: "./tsconfig.json",
        include: ["src/**/*"],
        outDir: "lib",
        compilerOptions: {
          jsx: "preserve",
          declaration: false,
          skipLibCheck: true,
          outDir: "lib",
        },
      }),
      copy({
        targets: [
          { src: "src/styles", dest: "lib" },
          {
            src: "src/components/Divider/Divider.scss",
            dest: "lib/components/Divider",
          },
          {
            src: "src/components/MdiIcon/MdiIcon.scss",
            dest: "lib/components/MdiIcon",
          },
          {
            src: "src/components/VConfirm/*.scss",
            dest: "lib/components/VConfirm",
          },
        ],
        hook: "writeBundle",
      }),
    ],
  },
];
