<template>
  <div>
    <van-nav-bar title="新增留言" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="note"
        rows="3"
        autosize
        required
        :rules="[{ required: true, message: '留言不能为空' }]"
        label="留言"
        type="textarea"
        maxlength="320"
        placeholder="请输入留言"
        show-word-limit
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" color="#d81e07">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      note: "",
      username: "",
      trueUserName:'',
      date: "",
    };
  },
  components: {},
  computed: {},
  methods: {
    async onSubmit() {
      const { data: res } = await this.$http.post("users", {
        username: this.note,
        password: '123456',
        email: this.date,
        mobile: this.username,
      });
      console.log(res);
      if (res.meta.status != 201)
        return this.$notify({ type: "danger", message: "创建失败！" });
      this.$notify({ type: "success", message: "创建成功" });
      this.$router.push("/note");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    getuserName() {
      // 获取用户名
      let username = window.localStorage.getItem("username");
      this.username = username;
    },
    getDate() {
      // 获取日期
      let date = new Date();
      let seperator1 = "-";
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let currentdate = year + seperator1 + month + seperator1 + strDate;
      this.date = currentdate;
    },
    getRandomUser() {
      let len = 32;
      let $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
      let maxPos = $chars.length;
      let pwd = "";
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      this.trueUserName = pwd
    },
  },
  created() {},
  mounted() {
    this.getuserName()
    this.getDate()
    this.getRandomUser()
  },
};
</script>

<style lang="less" scoped>
</style>