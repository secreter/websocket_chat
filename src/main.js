import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './router/index'
import App from './App'

Vue.use(VueRouter)
let router = new VueRouter()
routerMap(router)
/* eslint-disable no-new */
let vm={
  components: { App }
}

router.start(vm, 'body')