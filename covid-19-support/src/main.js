// *** NOTES ***
// The following files are included globally in the vue.config.js file so that
// we are able to use the SASS variables in the main CSS file and the component files.
// ./node_modules/bootstrap/scss/_functions.scss - The Bootstrap Functions
// ~bootstrap/scss/variables - The default Bootstrap Variables
// ~bootstrap/scss/mixins - The Bootstrap Minins
// ./src/themes/${process.env.VUE_APP_THEME}/SCSS/custom.scss - Our "theme" SCSS

import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue' // IconsPlugin
import i18n from './i18n'
import App from './App.vue'

import router from './router'

// The following line imports our custom SCSS file, inside that file
// the main Bootstrap SCSS and BootstrapVue SCSS are imported.
// import('./themes/' + process.env.VUE_APP_THEME + '/SCSS/custom.scss')

import './ExtraMarkers/css/leaflet.extra-markers.min.css'
import './ExtraMarkers/js/leaflet.extra-markers.min.js'

import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

// REQUIRED - Importing Bootstrap and BootstrapVue
import './scss/bootstrap.scss'

// REQUIRED - Importing our Main CSS file
import './scss/Main.scss'

import store from './store'

// General style overrides and custom classes

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = true

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
  methods: {
    updateLang(iso) {
      i18n.locale = iso
    }
  }
}).$mount('#app')
