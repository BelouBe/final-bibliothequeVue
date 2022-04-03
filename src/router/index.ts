import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Admin from "../views/Rotsy/Admin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },

  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
