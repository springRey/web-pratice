<template>
    <div class="pop">
        <div class="">
            <p class="">弹出层题目</p>
            <van-cell is-link @click="openPopup('normal')">展示弹出层</van-cell>
            <van-cell is-link @click="openPopup('top')">顶部弹出</van-cell>
            <van-cell is-link @click="openPopup('bottom')">底部弹出</van-cell>
            <van-cell is-link @click="openPopup('left')">左侧弹出</van-cell>
            <van-cell is-link @click="openPopup('right')">右侧弹出</van-cell>
        </div>
        <popup-index ref="cpopup" />
    </div>
</template>

<script>
import PopupIndex from '../popup/index.vue';

export default {
    props: [],
    data() {
        return {};
    },
    components: { PopupIndex },
    watch: {},
    computed: {},
    methods: {
        openPopup(name) {
            this.$refs.cpopup.$emit('send-popup-data', { name });
        },
        closePopup() {
            this.$store.state.isShowPopup = false;
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang="less" scoped>
// .popup {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     z-index: 3;
//     &-backdrop {
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         background: rgba(0, 0, 0, 0.7);
//         z-index: 1;
//     }
//     &-mian {
//         position: relative;
//         width: 200px;
//         height: 200px;
//         margin: auto;
//         background: #fff;
//         color: #000;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         z-index: 2;
//     }
// }
</style>
