import Vue from "vue";
import store from "../store/index";
import App from "./App.vue";
import jQuery from "jquery";
import router from "./router";

window.$ = window.jQuery = jQuery;

import "popper.js";
import "bootstrap";
import "./assets/styles/app.sass";

Vue.config.productionTip = false;

new Vue ({
    store,
    router,
    render: h => h (App)
}).$mount ("#app");