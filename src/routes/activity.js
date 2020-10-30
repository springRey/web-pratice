import Countdown from '../components/activity/Countdown.vue';
import Popup from '../components/activity/Popup.vue';
import HtmlToImage from '../components/activity/HtmlToImage.vue';
import Marquee from '../components/activity/Marquee.vue';
import TouchBottom from '../components/activity/TouchBottom.vue';

const activity = [
    { path: '', component: Countdown },
    { path: '/popup', component: Popup },
    { path: '/html-image', component: HtmlToImage },
    { path: '/marquee', component: Marquee },
    { path: '/touch-bottom', component: TouchBottom },
];
export default activity;
