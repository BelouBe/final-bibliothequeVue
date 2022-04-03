import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
<<<<<<< HEAD
import Login from "../views/Login.vue";
import Message from "../views/Message.vue";
import SignIn from "../components/tsix/Login/SignIn.vue";
import Profil from "../views/Profil.vue";
=======
import Accueil from "../views/Accueil.vue";
import AcceuilEmprunt from "../views/Accueil_client.vue";
>>>>>>> 4cea669d347ff1c590d4e662d6470844321a9c73

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
<<<<<<< HEAD
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
  }
=======
    path: "/AcceuilEmprunt",
    name: "AcceuilEmprunt",
    component: AcceuilEmprunt,
  },

>>>>>>> 4cea669d347ff1c590d4e662d6470844321a9c73
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
