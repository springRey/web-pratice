<template>
    <div class="activity">
        <van-row class="home-container">
            <van-col span="4">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item :title="i.title" v-for="(i, j) in navigateArr" :key="j" @click="goNavigate(i)">{{ i.title }}</van-sidebar-item>
                </van-sidebar>
            </van-col>
            <van-col span="20" class="main">
                <router-view></router-view>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name: 'activity',
    props: [],
    data() {
        return {
            navigateArr: [
                { title: '计时器', url: '/' },
                { title: '弹框', url: '/popup' },
                { title: '截图', url: '/html-image' },
                { title: '跑马灯', url: '/marquee' },
                { title: '滑动底部隐藏', url: '/touch-bottom' },
            ],
            activeKey: 0,
        };
    },
    components: {},
    watch: {},
    computed: {},
    methods: {
        goNavigate(item) {
            this.$router.replace({ path: `${item.url}` });
        },
        goBack() {
            // window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang="less" scoped></style>
