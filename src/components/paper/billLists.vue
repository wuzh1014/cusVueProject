<template>
  <div class="billList">
    <headTop :headTitle="titleName" ></headTop>
    <!--@comfirmPage="comfirmPage"-->
    <div class="box">
      <div class="container-fluid">
        <at-table :columns="billColumns" :data="billList"></at-table>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .billList{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    background-color: #fff;
    overflow: auto;
    .box{
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-top: 1.093333rem;
    }
  }
</style>
<script>
  import headTop from '@/components/paper/head'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import {doDataPost} from '@/service/getData'

  export default {
    name: 'billList',
    data () {
      return {
        titleName:'',
        billList: [],
      }
    },
    watch: {
    },
    created(){
      this.getBillList();
    },
    methods: {
      async getBillList() {
        let that = this;
        let response = doDataPost('/product/getBillList', {});
        response.then(function (result) {
          that.billList = result.data;
        });
      },
      async deleteBill(contentId) {
        let that = this;
        let response = doDataPost('/product/deleteBillPhy', {
          uid: contentId
        });
        response.then(function (result) {
          if (result.data.code){
            that.getBillList();
          }
        });
      },
      toPaper(contentId){
        this.$router.push({path: '/main/paper', query:{contentId: contentId}});
      },
    },
    components:{headTop},

  }
</script>

