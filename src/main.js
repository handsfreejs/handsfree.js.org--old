import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// @FIXME We should be using the actual module but this is fine until Handsfree.js is updated
import 'handsfree/dist/handsfree.js'
// @FIXME this should be imported by handsfree
import 'handsfree/dist/handsfree.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/sass/main.sass'

// Highlight.js
// @TODO only load on required pages
import hljs from 'highlight.js'
require('highlight.js/styles/shades-of-purple.css')
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage(
  'javascript',
  require('highlight.js/lib/languages/javascript')
)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
