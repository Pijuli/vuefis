import Vue from "vue";
import VueRouter from "vue-router";
import EfisPanel from "../views/EfisPanel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EfisPanel",
    component: EfisPanel,
  },
  {
    path: "/config",
    name: "Config",
    component: () =>
      import("../views/Config.vue"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
