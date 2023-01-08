import { createI18n } from "vue-i18n";
import en from "./en.json";
import ja from "./ja.json";

const messages = {
  en: en,
  ja: ja,
};

export default createI18n({
  legacy: false,
  locale: window.navigator.language,
  fallbackLocale: "en",
  messages: Object.assign(messages),
});
