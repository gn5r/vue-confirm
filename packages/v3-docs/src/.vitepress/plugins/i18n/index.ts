import { createI18n } from "vue-i18n";
import { en, ja } from "./locales";

interface LANGUAGE_MAP {
  [key: string]: {
    config: Record<string, any>;
    title: string;
  };
}

export const languageMap: LANGUAGE_MAP = {
  en: { config: en, title: "English" },
  ja: { config: ja, title: "日本語" },
};

const messages = Object.keys(languageMap).reduce((m, k) => {
  return {
    ...m,
    [k]: languageMap[k].config,
  };
}, {});

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
