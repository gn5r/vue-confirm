import { createI18n } from "vue-i18n";
import { en, ja } from "./locales";

export default createI18n({
  legacy: false,
  locale: window.navigator.language,
  fallbackLocale: "en",
  messages: { en, "ja-JP": ja },
});
