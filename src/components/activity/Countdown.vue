<template>
    <div class="count-down">
        <p>设置你要倒计时的时间</p>
        <div>
            结束时间
            <input type="text" v-model="endTime" placeholder="必填" />
        </div>
        <div>
            开始时间
            <input type="text" v-model="startTime" placeholder="非必填" />
        </div>
        <button @click="setCountDown()">开始倒计时</button>
        <p>活动结束还有</p>
        <div>{{ countDown | formateTime() }}</div>
    </div>
</template>

<script>
import { setCountdown } from '../../utils/utils';

export default {
    props: [],
    data() {
        return {
            endTime: 1603468800,
            startTime: 1603382400,
            countDown: 0, // 倒计时时间
            timer: null,
        };
    },
    components: {},
    filters: {
        formateTime(time) {
            return setCountdown(time);
        },
    },
    watch: {
        countDown: {
            handler() {},
            immediate: true,
        },
    },
    computed: {},
    methods: {
        setCountDown() {
            this.startTime = this.startTime || Date.now() / 1000;
            this.countDown = parseInt(this.endTime - this.startTime, 10);
            this.countDownOne();
        },
        // 倒计时
        countDownOne() {
            const vm = this;
            vm.countDown -= 1;
            if (vm.countDown <= 0) {
                clearTimeout(vm.timer);
            }
            vm.timer = setTimeout(() => {
                vm.countDownOne();
            }, 1000);
        },
    },
    created() {},
    mounted() {},
};
</script>

<style lang="less" scoped></style>
