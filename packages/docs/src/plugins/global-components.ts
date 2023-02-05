import type { App } from "vue";

import Markup from "@/components/app/Markup.vue";

export function registerComponents(app: App) {
  app.component("markup", Markup);
}
