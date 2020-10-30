import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/index';
import router from './routes/index';
// 引入style
import './assets/style/style.less';

// 引入组件库
import components from './components/component';

Vue.use(components);

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
