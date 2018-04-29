<template>
  <div class="detailList">
    <headTop :headTitle="titleName" :addTypeFlag="addTypeFlag" @confirmPage="showAddFrame"></headTop>
    <div class="box">
      <el-table :data="detailList" style="width: 100%">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="mini" label="缩写"></el-table-column>
        <el-table-column prop="memo" label="备注"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="prize" label="单价"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editItemType($event, scope.row.uid)">修改</el-button>
            <el-button size="mini" @click="deleteItemType($event, scope.row.uid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      :title="chooseTittle + titleName"
      :visible.sync="modalChoose" append-to-body center>

      <addTypeContent
        :addContent="addContent"
        :type="type"></addTypeContent>

      <span slot="footer" class="dialog-footer">
        <el-button @click="modalChoose = false">取 消</el-button>
        <el-button type="primary" @click="confirmAddFrame">确 定</el-button>
      </span>

    </el-dialog>

  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .detailList{
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
  import addTypeContent from '@/components/paper/addTypeContent'
  import headTop from '@/components/paper/head'
  import {doDataPost} from '@/service/getData'
  export default {
    name: 'detailList',
    data () {
      return {
        titleName: '',
        chooseTittle: '添加',
        addTypeFlag: 1,
        modalChoose: false,
        detailList: [],
        addContent: {},
        type: 0,
      }
    },
    watch: {
    },
    created(){
      let query = this.$route.query;
      if (query.type){
        this.type = query.type;
      }
      switch (this.type){
        case 0:this.titleName = '导轨类型';break;
        case 1:this.titleName = '导轨配件';break;
        case 2:this.titleName = '帘头类型';break;
        case 3:this.titleName = '帘头配件';break;
        case 4:this.titleName = '安装类型';break;
        case 5:this.titleName = '布料类型';break;
        case 6:this.titleName = '布料配件';break;
        case 7:this.titleName = '纱布类型';break;
        case 8:this.titleName = '纱布配件';break;
        case 9:this.titleName = '其他配件';break;
        case 10:this.titleName = '拉帘类型';break;
        case 11:this.titleName = '导轨型号';break;
      }
      this.getDetailList();
    },
    methods: {
      async getDetailList() {
        let that = this;
        let response = doDataPost('/product/getItemTypes', {
          type: this.type,
          exist: 1,
        });
        response.then(function (result) {
          for (let i in result.data){
            if (result.data[i].createTime){
              result.data[i].createTime = new Date(result.data[i].createTime);
              result.data[i].createTime = result.data[i].createTime.getFullYear() + '年'
                + result.data[i].createTime.getMonth() + '月' + result.data[i].createTime.getDate() + '日 '
                + result.data[i].createTime.getHours() + ':' +result.data[i].createTime.getMinutes();
            }else{
              result.data[i].createTime = '';
            }
            if (!result.data[i].prize){
              result.data[i].prize = 0
            }
          }
          that.detailList = result.data;
        });
      },
      addItemTypes() {
        let that = this;
        let response = doDataPost('/product/addItemTypes', {
          type: this.type,
          uid: this.addContent.uid,
          name: this.addContent.name,
          prize: this.addContent.prize,
          mini: this.addContent.mini,
          memo: this.addContent.memo,
        });
        response.then(function (result) {
          if (result.data){
            that.$message({
              type: 'success',
              message: '添加成功!'
            });
            that.getDetailList();
          }else{
            that.$message({
              type: 'info',
              message: '添加失败!'
            });
          }
        });
      },
      deleteItemType(e, uid) {
        e.stopPropagation();
        let that = this;
        let response = doDataPost('/product/deleteItemType', {
          uid: uid
        });
        response.then(function (result) {
          if (result.data.code){
            that.getDetailList();
          }
        });
      },
      editItemType(e, uid){
        e.stopPropagation();
        let that = this;
        let response = doDataPost('/product/getItemType', {
          uid: uid
        });
        response.then(function (result) {
          that.addContent = result.data;
        });
        this.modalChoose = true;
      },
      showAddFrame(){
        this.modalChoose = true;
        this.addContent = {};
      },
      confirmAddFrame(){
        this.addItemTypes();
        this.modalChoose = false;
      },
    },
    components:{headTop, addTypeContent},

  }
</script>

