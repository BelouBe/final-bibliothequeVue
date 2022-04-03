import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faMicrophone,
  faUserCircle,
  faChalkboard,
  faShoppingBag,
  faHeart,
  faBorderAll,
  faAward,
  faCheckCircle,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faMicrophone,
  faUserCircle,
  faChalkboard,
  faShoppingBag,
  faMicrophone,
  faHeart,
  faBorderAll,
  faAward,
  faCheckCircle,
  faCalendarAlt,
  faMapMarkerAlt
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");
