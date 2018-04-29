<template>
  <div class="billList">
    <headTop :headTitle="titleName"></headTop>
    <div class="box">
      <el-table :data="billList" @row-click="toPaper" style="width: 100%">
        <el-table-column prop="contentId" label="订单号"></el-table-column>
        <el-table-column prop="titleName" label="订单名称"></el-table-column>
        <el-table-column prop="orderDetail.name" label="姓名"></el-table-column>
        <el-table-column prop="orderDetail.address" label="地址"></el-table-column>
        <el-table-column prop="orderDetail.phone" label="手机"></el-table-column>
        <el-table-column prop="prize" label="合计"></el-table-column>
        <el-table-column prop="createTime" label="开单时间" width="200"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"@click="deleteBill($event, scope.row.contentId)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :page-count="pageCount"
        :current-page="current"
        layout="prev, pager, next"
        @current-change="currentChange"
        :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .billList{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: #fff;
    overflow: auto;
    .box{
      width: 100%;
      height: 100%;
      overflow: auto;
    }
  }
</style>
<script>
  import headTop from '@/components/paper/head'
  import {doDataPost} from '@/service/getData'

  export default {
    name: 'billList',
    data () {
      return {
        titleName:'订单列表',
        billList: [],
        pageSize: 10,
        current: 1,
        pageCount: 0,
        pageTotal: 0,
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
        let response = doDataPost('/product/getBillList', {
          pageTotal: this.pageTotal,
          pageSize: this.pageSize,
          current: this.current,
        });
        response.then(function (result) {
          if (result.data){
            let billList = result.data.billList;
            for (let i in billList){
              billList[i].orderDetail = JSON.parse(billList[i].orderDetail);
              if (billList[i].createTime){
                billList[i].createTime = new Date(billList[i].createTime);
                billList[i].createTime = billList[i].createTime.getFullYear() + '年'
                + billList[i].createTime.getMonth() + '月' + billList[i].createTime.getDate() + '日 '
                + billList[i].createTime.getHours() + ':' +billList[i].createTime.getMinutes();
              }else{
                billList.createTime = '';
              }
            }
            that.billList = billList;
            that.pageTotal = result.data.count;
          }
        });
      },
      async deleteBill(e, contentId) {
        e.stopPropagation();
        this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let that = this;
          let response = doDataPost('/product/deleteBillPhy', {
            uid: contentId
          });
          response.then(function (result) {
            if (result.data.code){
              that.$message({
                type: 'success',
                message: '删除成功!'
              });
              that.getBillList();
            }
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      toPaper(row){
        this.$router.push({path: '/main/paper', query:{contentId: row.contentId,hideNumFlag: 1}});
      },
      currentChange(value){
        this.current = value;
        this.getBillList();
      },
    },
    components:{headTop},
  }
</script>

