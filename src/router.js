import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import Item from "./views/item";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "item",
      path: "/item",
      component: Item
    }
  ]
});
