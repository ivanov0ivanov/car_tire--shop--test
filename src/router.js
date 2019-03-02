import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Item from "./views/Item";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Item",
      path: "/item",
      component: Item,
      // props: (route) => route.params.item
    }
  ]
});
