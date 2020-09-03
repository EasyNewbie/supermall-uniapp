import Vue from 'vue'
import App from './App'
import Request from './js_sdk/pocky-request/pocky-request v.2.0.4/index'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
global.$http = Request();
app.$mount()
