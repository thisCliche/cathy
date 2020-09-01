<template>
  <div class="form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        required
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        required
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 1.6rem .24rem 0;">
        <van-button round block type="info" color="#d81e07" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  components: {
  },
  computed: {},
  methods: {
    // 登录函数
    async onSubmit(values) {
      const {data: res} = await this.$http.post('login',values)
      if (res.meta.status != 200) return this.$toast({message: res.meta.msg, position: 'bottom'})
      this.$toast({message: '登录成功！', position: 'bottom'})
      window.localStorage.setItem('token', res.data.token)
      window.localStorage.setItem( 'username', res.data.username)
      this.$router.push('/home')
    },
  },
  created() {},
  mounted() {
    this.$toast({message: '欢迎访问', position: 'bottom'})
    const tokenStr = window.localStorage.getItem('token')
    if(!tokenStr) return
    this.$router.push('/home')
  },
};
</script>

<style lang="less" scoped>
.form{
  margin: 70% .72rem 0;
}
</style>