import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$prismicApiEndpoint = 'https://product-field-guide.cdn.prismic.io/api/v2';
Vue.prototype.$prismicApiToken = 'MC5XeU8yMUNRQUFHQ05UcXhZ.ae-_ve-_ve-_vXtOBO-_vR3vv71GLe-_ve-_vVdC77-9de-_vWDvv71pXXMqCe-_ve-_ve-_vVFD77-9';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
