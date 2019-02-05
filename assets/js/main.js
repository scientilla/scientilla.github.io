import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../../vue/views/app.vue';
import Home from '../../vue/views/home.vue';
import FAQ from '../../vue/views/faq.vue';
import Contact from '../../vue/views/contact.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import WebFont from 'webfontloader';

Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/faq', component: FAQ},
  {path: '/contact', component: Contact}
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

const eventBus = new Vue();
global.eventBus = eventBus;

Vue.config.devtools = true;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created() {
    eventBus.$on('changeOverflow', (state) => {
      this.changeOverflowClass(state);
    });

    eventBus.$on('changeMobileMenu', (state) => {
      this.changeMobileMenuClass(state);
    });
  },
  methods: {
    changeOverflowClass(state) {
      const el = document.body;

      if (state) {
        el.classList.add('hide-overflow');
      } else {
        el.classList.remove('hide-overflow');
      }
    },

    changeMobileMenuClass(state) {
      const el        = document.body,
            className = 'show-mobile-menu';

      if (typeof state === 'undefined') {
        if (el.classList.contains(className)) {
          el.classList.remove(className);
        } else {
          el.classList.add(className);
        }
      } else {
        if (state){
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      }
    }
  }
});

let loadGoogleWebFonts = function() {
  WebFont.load({
    google: {
      families: ['Open Sans: 400, 700, 800', 'Roboto Slab']
    }
  });
}

let stickyFooter = function() {
  let wrapperElements = document.getElementsByClassName('js-wrapper'),
      footerElements  = document.getElementsByClassName('js-footer'),
      wrapper         = wrapperElements[0],
      footer          = footerElements[0],
      height          = 0;

  if (wrapper && footer) {
    height = footer.clientHeight;
    wrapper.style.paddingBottom = height + 'px';
  }
}

let fixedHeader = function() {
  let wrapperElements   = document.getElementsByClassName('js-wrapper'),
      headerElements    = document.getElementsByClassName('js-header'),
      containerElements = document.getElementsByClassName('js-mobile-menu-container'),
      wrapper           = wrapperElements[0],
      header            = headerElements[0],
      container         = containerElements[0],
      height            = 0;

  if (wrapper && header && container) {
    if (window.innerWidth >= 768) {
      height = header.clientHeight;
    } else {
      height = header.clientHeight - container.clientHeight;
    }
    wrapper.style.paddingTop = height + 'px';
  }
}

let addLoadedClass = function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 200);
}

global.stickyFooter = stickyFooter;

// Directly load these scripts
loadGoogleWebFonts();
addLoadedClass();
fixedHeader();

// Load after window is loaded
window.onload = function() {
  stickyFooter();
  fixedHeader();
}

window.onresize = function() {
  stickyFooter();
  fixedHeader();
}