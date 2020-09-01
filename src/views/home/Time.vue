<template>
  <div>
    <van-cell-group>
      <van-cell title="时间1" :value="time1" />
      <van-cell title="时间2" :value="time2" />
      <van-cell title="时间3" :value="time3" />
      <van-cell title="时间4" :value="time4" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      time1: '',
      time2: '',
      time3: '',
      time4: '',
    };
  },

  components: {},
  computed: {},
  methods: {
    timeElapse(c) {
      var e = Date();
      var f = (Date.parse(e) - c) / 1000;
      var g = Math.floor(f / (3600 * 24));
      f = f % (3600 * 24);
      var b = Math.floor(f / 3600);
      if (b < 10) {
        b = "0" + b;
      }
      f = f % 3600;
      var d = Math.floor(f / 60);
      if (d < 10) {
        d = "0" + d;
      }
      f = f % 60;
      if (f < 10) {
        f = "0" + f;
      }
      var a = g + "天" + b + "时" + d + "分" + f + "秒";
      return a;
    },
  },
  created() {
    // 2020.06.21 16:47 相遇 2020.07.03 20:32 相恋 2020.07.03 21:18 抱抱 2020.07.10 22:45 亲亲
    let meet = 1592729220000, love = 1593779520000, embrace = 1593782280000, kiss = 1594392300000;
    let that = this
    setInterval(() => {
      that.time1 = that.timeElapse(meet)
      that.time2 = that.timeElapse(love)
      that.time3 = that.timeElapse(embrace)
      that.time4 = that.timeElapse(kiss)
			}, 1000);
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
</style>