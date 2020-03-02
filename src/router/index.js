import Vue from "vue";

import VueRouter from "vue-router";

import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Slider from "../components/Slider";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: "/slider",
      name: "Slider",
      component: Slider,
      props: true
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      props: true
    },
    {
      path: "/about",
      name: "About",
      component: About,
      props: true
    }
  ]
});
export default router;
