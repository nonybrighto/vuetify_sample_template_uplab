import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
