<template>
  <div class="home">
    <div class="main">
      <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
    <van-tabbar v-model="active" active-color="#d81e07" @change="onChange">
      <van-tabbar-item to="/note" name="note" icon="wap-home">留言</van-tabbar-item>
      <van-tabbar-item to="/time" name="time" icon="like">时间</van-tabbar-item>
      <van-tabbar-item to="/personal" name="personal" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      active: '',
    }
  },

  components: {},
  computed: {},
  methods: {
    onChange(idx) {
      window.sessionStorage.setItem('tabbar',idx)
    },
  },
  created() {
    let tabber = window.sessionStorage.getItem('tabbar')
    if(tabber) this.active = tabber
    else this.active = 'time'
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
.home{background: #eaedf1;height: 100%;}
</style>