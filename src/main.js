import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import "@/assets/css/style.css";
import "./registerServiceWorker";

import GoogleAuth from "@/config/google_oAuth.js";
const gauthOption = {
  clientId:
    "1012329225066-5eask441gcok9mrspathp897b1m2rne0.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};
Vue.use(GoogleAuth, gauthOption);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
