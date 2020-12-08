import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
    router,
    store,
}).$mount('#app');
