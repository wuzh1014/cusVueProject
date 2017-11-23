<template>
  <div class="billList">
    <headTop :headTitle="titleName" ></headTop>
    <div class="box">
      <div class="container-fluid">
        <el-table :data="billList" @row-click="toPaper" style="width: 100%">
          <el-table-column prop="uid" label="编号"></el-table-column>
          <el-table-column prop="name" label="姓名" width="150"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="phone" label="手机"></el-table-column>
          <el-table-column prop="prize" label="合计"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <at-button size="mini" @click="deleteBill($event, scope.row.uid)">删除</at-button>
            </template>
          </el-table-column>
        </el-table>
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
      async deleteBill(e, contentId) {
        e.stopPropagation();
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
      toPaper(row){
        this.$router.push({path: '/main/paper', query:{contentId: row.uid}});
      },
    },
    components:{headTop},

  }
</script>

