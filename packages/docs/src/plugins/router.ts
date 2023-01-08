import * as VueRouter from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import VCDemo from "@/pages/VCDemo.vue";
import VCApi from "@/pages/VCApi.vue";
import VCSass from "@/pages/VCSass.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "VCDemo",
    component: VCDemo
  },
  {
    path: "/api",
    name: "VCApi",
    component: VCApi
  },
  {
    path: "/sass",
    name: "VCSass",
    component: VCSass
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;