<template>
  <div class="home">
    <van-nav-bar title="陈陈练习册"></van-nav-bar>
   
    <p>developed by ccr</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: [],
  data () {
    return {
      activeKey: '',
      navigateArr: [
        { title: '活动', url: '/activity' },
        { title: '创意', url: '/novelty' },
      ]
    }
  },
  components: {},
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>

<style  lang="less" scoped>
.home {
  &-container {
    height: calc(100vh - 136px);
  }
}
</style>
