import { createRouter, createWebHashHistory } from "vue-router";
import generatedPages from "virtual:generated-pages";

export const routes = [...generatedPages];

const router = createRouter({
  history: createWebHashHistory(import.meta.url),
  routes,
});

export default router;
