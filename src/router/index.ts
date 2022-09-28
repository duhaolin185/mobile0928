import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LayOut from "@/views/layout/LayOut.vue";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: LayOut,
    redirect: { name: "homeSon" },
    children: [
      {
        path: "/home",
        name: "homeSon",
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/fen",
    name: "fen",
    component: LayOut,
    redirect: { name: "type" },
    children: [
      {
        path: "/type",
        name: "type",
        component: () => import("@/views/FenXiao.vue"),
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: LayOut,
    redirect: { name: "shop" },
    children: [
      {
        path: "/shop",
        name: "shop",
        component: () => import("@/views/MyCart.vue"),
      },
    ],
  },
  {
    path: "/mine",
    name: "mine",
    component: LayOut,
    redirect: { name: "detail" },
    children: [
      {
        path: "/detail",
        name: "detail",
        component: () => import("@/views/MineView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
