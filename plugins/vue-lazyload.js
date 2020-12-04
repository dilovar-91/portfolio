import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '../assets/no-image.png'
import loading from '../assets/loading.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error,
  loading,
  attempt: 1,
})
