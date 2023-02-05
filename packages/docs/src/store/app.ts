import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";

type RootState = {
  dark: boolean;
  locale: string;
};

const STORE_KEY = "app";

export const useAppStore = defineStore("app", () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const state = reactive<RootState>({
    dark: isDarkMode.matches,
    locale: window.navigator.language,
  });

  function load() {
    const stored = localStorage.getItem(STORE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    Object.assign(state, { ...data });
  }

  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state, null, 2));
  }

  load();

  return { ...toRefs(state), save, load };
});
