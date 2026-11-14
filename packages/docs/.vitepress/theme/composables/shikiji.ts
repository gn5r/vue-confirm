import {
  createHighlighterCoreSync,
  createJavaScriptRegexEngine,
  addClassToHast,
  type ShikiTransformer,
  type CodeToHastOptions,
} from "shiki";
import githubLight from "shiki/themes/github-light.mjs";
import githubDark from "shiki/themes/github-dark.mjs";
import typescript from "shiki/langs/typescript.mjs";
import scss from "shiki/langs/scss.mjs";
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
      transformerNotationDiff({ matchAlgorithm: "v3" }),
      transformerNotationFocus({
        matchAlgorithm: "v3",
        classActiveLine: "has-focus",
        classActivePre: "has-focused-lines",
      }),
      transformerNotationHighlight({ matchAlgorithm: "v3" }),
      transformerNotationErrorLevel({ matchAlgorithm: "v3" }),
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
  return createHighlighterCoreSync({
    themes: [githubLight, githubDark],
    langs: [typescript, scss],
    engine: createJavaScriptRegexEngine(),
  });
}
