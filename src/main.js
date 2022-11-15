import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/plugins'
import VueLazyload from 'vue-lazyload'
import Echo from 'laravel-echo'
import Chat from 'jwchat';

Vue.use(Chat)
window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '26d2eff19fdf68464444',
    cluster: 'ap1',
    encrypted: true
});
Vue.use(window.Echo)

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/404.jpg'),
    loading: require('./assets/loading.svg'),
    attempt: 1,
    listenEvents: ['scroll']
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

