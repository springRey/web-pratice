// 首页
import VueRouter from 'vue-router';
import Rich from '../pages/Rich.vue';
import Activity from '../pages/Activity.vue';
import Novelty from '../pages/Novelty.vue';
import Setting from '../pages/Setting.vue';

// 首页子组件
import jsactivity from './activity';
import jsnovelty from './novelty';
import jsrich from './rich';
import jssetting from './setting';

const routes = [
    { path: '/', component: Activity, children: jsactivity },
    { path: '/novelty', component: Novelty, children: jsnovelty },
    { path: '/rich', component: Rich, children: jsrich },
    { path: '/setting', component: Setting, children: jssetting },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
});

export default router;
