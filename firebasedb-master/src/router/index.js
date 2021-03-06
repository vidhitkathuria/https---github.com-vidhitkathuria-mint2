import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cr from "../components/cr.vue";
import Error from "../pages/Error.vue";
import Schedule from "../pages/Schedule.vue";
import Landing from "../components/Landing.vue";
import Features from "../pages/Features.vue";
import About from "../pages/About.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: Home,
  },
  { path: "/vidhit", name: "Cr", component: Cr },
  { path: "/Landing", name: "Landing", component: Landing },
  {
    path: "/404",
    name: "Error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
