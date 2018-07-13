import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../../vue/views/app.vue';
import Home from '../../vue/views/home.vue';
import FAQ from '../../vue/views/faq.vue';
import Contact from '../../vue/views/contact.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/faq', component: FAQ},
  {path: '/contact', component: Contact}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.devtools = true;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});