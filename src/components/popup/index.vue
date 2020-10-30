<template>
    <div class="popup-content" v-if="backdrop">
        <div class="popup-mask" @click="onClickMask"></div>
        <transition-group name="slide-fade">
            <component :is="popupName" :key="popupName"></component>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'popup-index',
    data() {
        return {
            popupName: '',
            closeByBackdropClick: true,
            backdrop: false,
        };
    },
    computed: {},
    methods: {
        sendPopupData(playload) {
            this.backdrop = true;
            this.popupName = playload.name;
            this.$options.components[this.popupName] = () => import(`./${this.popupName}.vue`);
        },
        onClickMask() {
            this.backdrop = false;
            this.$emit('handle-popup', false);
        },
    },
    created() {
        this.$on('send-popup-data', this.sendPopupData);
    },
};
</script>

<style lang="less" scoped>
.popup-content {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
}
.popup-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.7;
    z-index: 10;
}
</style>
