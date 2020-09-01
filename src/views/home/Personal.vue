<template>
  <div>
    功能开发中...
    <van-button type="warning" @click="signOut">退出</van-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {},
  methods: {
    signOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
</style>