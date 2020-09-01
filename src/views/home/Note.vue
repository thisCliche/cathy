<template>
  <div class="note">
    <van-nav-bar
      right-text="新增留言"
      border
      fixed
      @click-right="onClickRight"
    />
    <div class="middle warpper" ref="wrapper"> 
      <div class="content">
        <van-card v-for="(item, idx) in noteList" :key="idx" :note="item"></van-card>
      </div>
    </div>
  </div>
</template>

<script>
import  VanCard  from '../../components/Card'
import BScroll from '@better-scroll/core'
export default {
  name: "note",
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前页码
        pagenum: 1,
        // 当前每页条数
        pagesize: 10
      },
      noteList :[],
      total: 0,
    };
  },

  components: {
    VanCard,
  },
  computed: {
    isNoteList() {
      return this.noteList.length
    },
    // newNoteList() {
    //   this.noteList.splice(0,3)
    // }
  },
  methods: {
    onClickRight() {
      this.$router.push('/add')
    },
    async getNoteList() {
      const {data: res} = await this.$http.get('users',{params: this.queryInfo})
      console.log(res)
      if( res.meta.status != 200 ) return this.$notify({ type: 'danger', message: '获取列表失败' })
      
      this.noteList = res.data.users.splice(0,3);
      this.total = res.data.total;
    },
  },
  created() {},
  mounted() {
    this.getNoteList()
    let that = this
    setTimeout(
      () => {
      new BScroll(this.$refs.wrapper,{click: true})
    },500
    )
  },
};
</script>

<style lang="less" scoped>
.middle{
    position: absolute;
    top: 0.72rem;
    left: 0;
    right: 0;
    bottom: 1rem;
    overflow: hidden;
    .content{padding: .24rem 0;}
  }
</style>