import {
  bundledLanguages,
  getHighlighter,
  addClassToHast,
  type ShikiTransformer,
  type CodeToHastOptions,
} from "shiki";
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers";

export function useShikijiOptions(lang = "typescript"): CodeToHastOptions {
  return {
    lang: lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
    transformers: [
      transformerNotationDiff(),
      transformerNotationFocus({
        classActiveLine: "has-focus",
        classActivePre: "has-focused-lines",
      }),
      transformerNotationHighlight(),
      transformerNotationErrorLevel(),
      {
        name: "vitepress-add-class",
        pre(node) {
          addClassToHast(node, "vp-code");
        },
      },
      {
        name: "vitepress:clean-up",
        pre(node) {
          delete node.properties.tabindex;
          delete node.properties.style;
        },
      },
    ] as ShikiTransformer[],
  };
}

export function useHighlighter() {
  return getHighlighter({
    themes: ["github-light", "github-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });
}
