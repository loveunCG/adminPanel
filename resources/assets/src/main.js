// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import Msg from 'vue-message'
import VModal from 'vue-js-modal'

import {store} from './store'

Vue.use(BootstrapVue)
Vue.use(Msg)
Vue.use(VModal, { dialog: true })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
