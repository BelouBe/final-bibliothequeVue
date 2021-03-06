import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Message from "../views/Message.vue";
import SignIn from "../components/tsix/Login/SignIn.vue";
import Profil from "../views/Profil.vue";
import Admin from "../views/Rotsy/Admin.vue";
import AcceuilEmprunt from "../views/Accueil_client.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Message",
    name: "Message",
    component: Message,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/Profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/AcceuilEmprunt",
    name: "AcceuilEmprunt",
    component: AcceuilEmprunt,
  },
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
