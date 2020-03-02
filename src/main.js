import Vue from "vue";

import VModal from "vue-js-modal";

import App from "./App.vue";

import router from "./router/index.js";

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
