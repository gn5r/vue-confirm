import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useAppStore } from "@/store/app";

import { languageMap } from "@/plugins/i18n";

export function useI18nList() {
  const { locale } = useI18n({ useScope: "global" });
  const app = useAppStore();
  return computed(() =>
    Object.keys(languageMap).map((l) => {
      return {
        title: languageMap[l].title,
        value: l,
        active: locale.value === l,
        onClick: () => {
          if (locale.value !== l) {
            locale.value = l;
            app.locale = l;
          }
        },
      };
    })
  );
}
