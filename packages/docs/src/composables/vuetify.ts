import { getCurrentInstance } from "vue";

export function useVuetifyConfig() {
  const instance = getCurrentInstance();
  return {
    vuetify: instance?.appContext.config.globalProperties.$vuetify,
  };
}
