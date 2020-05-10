import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueGtag, {
  config: { id: "UA-8670877-1" },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
