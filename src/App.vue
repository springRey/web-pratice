<template>
    <div id="app">
        <van-nav-bar :title="currentTitle"></van-nav-bar>
        <div class="r-container">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" class="r-footer">
            <van-tabbar-item :icon="i.icon" v-for="(i, j) in tabs" :key="j">
                <router-link :to="i.url">{{ i.title }}</router-link>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            tabs: [
                { title: '活动', url: '/activity', icon: 'home-o' },
                { title: '创意', url: '/novelty', icon: 'friends-o' },
                { title: '丰富', url: '/rich', icon: 'search' },
                { title: '个人', url: '/setting', icon: 'setting-o' },
            ],
            active: 0,
            currentTitle: '活动',
        };
    },
    methods: {
        handleNavigate(item, index) {
            this.active = index;
            this.currentTitle = item.name;
        },
    },
};
</script>

<style lang="less" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
