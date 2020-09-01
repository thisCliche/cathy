<template>
  <div class="van-card" @click="test">
    <div class="top">
      <div class="left">{{note.mobile}}</div>
      <div class="rig">{{note.email}}</div>
    </div>
    <div class="descri van-multi-ellipsis--l3">
      {{note.username}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VanCard',
  data () {
    return {
    }
  },
  props:{
    note: Object
  },
  components: {},
  computed: {},
  methods: {
    test() {
      console.log(1)
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.van-card{
    margin: .24rem .24rem 0;
    padding: .24rem;
    border-radius: .08rem;
    background: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    .top{display: flex;justify-content: space-between; color: #888;}
    .descri{margin-top: 0.24rem;
    font-size: 0.28rem;
    line-height: 0.48rem;
    letter-spacing: 0.02rem;}
}
</style>