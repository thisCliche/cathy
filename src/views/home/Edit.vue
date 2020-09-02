<template>
  <div>
    <van-nav-bar title="留言详情" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right v-if="isDelete">
        删除
      </template>
    </van-nav-bar>
    <div class="detail">
      {{detail}}
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      id: '',
      detail: '',
      author: ''
    }
  },

  components: {},
  computed: {
    isDelete() {
      let username = window.localStorage.getItem('username')
      if(username == this.author) return true
      return false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      // console.log(1)
      this.$dialog.confirm({
        title: '重要提醒',
        message: '亲，这边不建议删除喔 ~ ~'
      }).then(this.deleteInfo).catch(()=>{
        console.log('没有删除')
      })

    },
    async deleteInfo() {
      const {data: res} = await this.$http.delete('users/' + this.id)
      if(res.meta.status != 200) return this.$notify({type:'warning', message: '删除失败！'})
      this.$notify({type:'success', message: '删除成功！'})
      this.$router.push('/note')
    },
    async getDetail() {
      const {data: res} = await this.$http.get('users/' + this.id)
      if(res.meta.status != 200) return this.$notify({type:'warning', message: '获取详情失败！'})
      console.log(res)
      this.detail = res.data.username
      this.author = res.data.mobile
    }
  },
  created() {},
  mounted() {
    this.id = this.$route.params.id
    this.getDetail()
  },
}
</script>

<style lang="less" scoped>
.detail{
  margin: .24rem;
  font-size: .28rem;
  line-height: .40rem;
  letter-spacing: .03rem;
  text-indent: 2em;
}
.van-nav-bar /deep/ .van-nav-bar__right{color: red;}
</style>