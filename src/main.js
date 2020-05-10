import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import metaData from "./metaData";

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(metaData);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
