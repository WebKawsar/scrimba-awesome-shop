import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { routes } from "./Routes";
import store from "./Store/index";


//Route configuration
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history",
  routes
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
