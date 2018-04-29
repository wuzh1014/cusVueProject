<template>
  <div class="paper">
    <el-container class="box">
      <el-col :span="5" v-if="itemAttrs.sliderFlag">
        <slider
          @duringGetTypes="duringGetTypes"
          :items="items"
          :itemAttrs="itemAttrs"
          @removeItem="removeItem"
          @resetItem="resetItem"
        ></slider>
      </el-col>
      <el-col :span="19">
        <headTop
          :hideNumFlag="itemAttrs.hideNumFlag"
          :headTitle="titleName"
          @showTitle="showTitle"
          @printPaper="printPaper"
          @editPage="editPage"
          @confirmPage="confirmPage"></headTop>
        <el-main>
          <el-col :span="24">
            <paperTop
              :itemAttrs="itemAttrs"
              :contentId="contentId"
              :orderDetail="orderDetail"
            ></paperTop>
            <paperItem :items="items"
                       :itemAttrs="itemAttrs"
                       :itemTypes="itemTypes"
                       :defaultItem="defaultItem"
                       :countAttrs="countAttrs"
                       :orderDetail="orderDetail"
                       @duringGetTypes="duringGetTypes"
                       ></paperItem>

            <paperBottom
              :itemAttrs="itemAttrs"
              :createTime="createTime"
              :orderDetail="orderDetail"
            ></paperBottom>

          </el-col>

          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
        </el-main>
      </el-col>
    </el-container>

    <el-dialog
      :title="itemAttrs.chooseTittle"
      :visible.sync="itemAttrs.modalChoose" append-to-body center>
      <chooseContent
        :items="items"
        :modelType="itemAttrs.modelType"
        :itemTypes="itemTypes"
        :curIndex="itemAttrs.curIndex"></chooseContent>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="itemAttrs.modalChoose=!itemAttrs.modalChoose">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="修改订单名称"
      :visible.sync="titleFlag" append-to-body center>
      <el-row>
        <el-col :span="24">
          <el-input
            size="mini"
            placeholder="订单名称"
            prefix-icon="el-icon-edit"
            v-model="titleName">
          </el-input>
        </el-col>
      </el-row>


      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="titleFlag=!titleFlag">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
  .paper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: #fff;
    overflow: auto;
    .box{
      font-size: 20px;
      padding-top: 50px;
    }
  }
</style>
<script>
  import chooseContent from '@/components/paper/chooseContent'
  import headTop from '@/components/paper/head'
  import slider from '@/components/paper/slider'
  import paperTop from '@/components/paper/paperTop'
  import paperBottom from '@/components/paper/paperBottom'
  import paperItem from '@/components/paper/paperItem'
  import {doDataPost} from '@/service/getData'

  export default {
    name: 'paper',
    data () {
      const defaultItem = {
        upLong: 0,
        upTime: 1,
        upMeter: 0,
        inTime: 1,
        inMeter: 0,
        inLong: 0,
        inLongLock: 0,
        inMulti: 2,
        bottomLong: 0,
        bottomLongLock: 0,
        bottomTime: 1,
        bottomMeter: 0,
        bottomMulti: 2,
        rollLong: 0,
        allLong: 0,
        flag: 1,
        count: 1,
        listLong: 0,
        needHead: 1,
        waitFlag: 0,
        itemMode: 1, //1 item 2 button
        isEdit: 0,
        selectTypes: [],
        selectTypesArray: this.initArray([], 12),
        typeNames: this.initArray([], 12),
        typePrizes: this.initArray([], 12),
      };
      return {
        titleName:'订单名称',
        initItemSize: 3,
        items: [],
        defaultItem: defaultItem,
        titleFlag: false,
        itemTypes: [],
        typeList: [
          {index: 0, name: '导轨类型'},
          {index: 1, name: '导轨配件'},
          {index: 2, name: '帘头类型'},
          {index: 3, name: '帘头配件'},
          {index: 4, name: '安装类型'},
          {index: 5, name: '布料类型'},
          {index: 6, name: '布料配件'},
          {index: 7, name: '纱布类型'},
          {index: 8, name: '纱布配件'},
          {index: 9, name: '其他配件'},
          {index: 10, name: '拉帘类型'},
          {index: 11, name: '导轨型号'},
        ],
        itemAttrs: {
          curIndex: '',
          modalChoose: false,
          modelType: 0,
          chooseTittle: '',
          hideNumFlag: 0,
          sliderIndex: 0,
          sliderFlag: 0,
        },
        countAttrs: [],
        contentId: '',
        createTime: '',
        orderDetail: {
          address: '',
          mobile: '',
          phone: '',
          name: '',
          reciveTime: '',
          memo: '',
          prize: 0,
          preMoney: 0,
          restMoney: 0,
          cutFlag: false,
          sliceFlag: false,
          packFlag: false,
          operator: '',
        },
      }
    },
    created(){
      this.init();
    },
    methods: {
      initArray(array, time){
          for (let i = 0; i < time; i++){
              array.push([]);
          }
          return array;
      },
      printPaper(){
        let bdhtml = window.document.body.innerHTML;
        window.document.body.innerHTML = $(".el-main").html();
        window.print();
        window.location.reload();
      },
      async init() {
        let query = this.$route.query;
        if (query.contentId){
          this.contentId = query.contentId;
          this.itemAttrs.hideNumFlag = 1;
        }else {
          this.itemAttrs.hideNumFlag = 0;
        }
        if (this.contentId){
          this.sliderFlag = 0;
          let that = this;
          let response = doDataPost('/product/getBillSimple', {
            uid: this.contentId,
          });
          response.then(function (result) {
            if (result.data){
              let billContent = result.data;
              that.orderDetail = billContent.orderDetail;

              for (let i in billContent.items){
                billContent.items[i].isEdit = 0;
              }

              that.items = billContent.items;
              if (!billContent.createTime){
                billContent.createTime = new Date();
              }
              that.createTime = billContent.createTime;

              if (!billContent.titleName){
                that.titleName = '订单:' + that.contentId;
              }else{
                that.titleName = billContent.titleName;
              }

              that.initSetTypeNames();
            }else{
              that.items.push(JSON.parse(JSON.stringify(that.defaultItem)));
            }
          });
        }else {
          this.sliderFlag = 1;
          for(let i = 0;i < this.initItemSize;i++){
            let addItem = JSON.parse(JSON.stringify(this.defaultItem));
            if (i === 0){
              addItem.isEdit = 1;
            }
            this.items.push(addItem);
          }
          let addItem = JSON.parse(JSON.stringify(this.defaultItem));
          addItem.itemMode = 2;
          this.items.push(addItem);
        }
      },
      editPage(){
        this.itemAttrs.hideNumFlag = 0;
        if (this.items.length > 0){
          this.items[0].isEdit = 1;
          this.sliderFlag = 1;
          this.sliderIndex = 0;
        }
      },
      confirmPage(){
        let that = this;
        for (let i in this.items){
          if (this.items[i].selectTypesArray){
            this.items[i].selectTypes = [];
            for (let typeIndex in this.items[i].selectTypesArray){
              this.items[i].selectTypes = this.items[i].selectTypes.concat(this.items[i].selectTypesArray[typeIndex]);
            }
          }
        }

        let response = doDataPost('/product/createBillSimple', {
          contentId: this.contentId,
          items: this.items,
          orderDetail: this.orderDetail,
          titleName: this.titleName,
        });
        response.then(function (result) {
          that.contentId = result.data.contentId;
          that.$message({
            type: 'success',
            message: '保存成功!'
          });
        });
        for (let i in this.items){
          this.items[i].isEdit = 0;
        }
        this.itemAttrs.sliderFlag = 0;
        this.itemAttrs.hideNumFlag = 1;
      },


      initSetTypeNames(){
        for(let k in 11){
          let that = this;
          let response = doDataPost('/product/getItemTypes', {
            type: k,
          });
          response.then(function (result) {
            for (let t in result.data){
              for (let i in that.items){
                if (that.items[i].selectTypes.indexOf(result.data[t].uid)!=-1){
                  that.items[i].typeNames[result.data[t].type].push(result.data[t].name);
                  that.items[i].typePrizes[result.data[t].type].push(result.data[t].prize);
                }
              }
            }
          });
        }
      },
      GetQueryString(str,name){
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = str.match(reg);
        if(r != null)return  unescape(r[2]); return null;
      },
      showTitle(){
        this.titleFlag = !this.titleFlag;
      },
      removeItem(index){
        this.items.splice(index, 1);
        if (this.items.length > 0){
          this.itemAttrs.sliderIndex = 0;
          this.items[0].isEdit = 1;
        }else {
          this.itemAttrs.sliderFlag = 0;
        }
      },
      resetItem(index){
//        this.items.splice(index, 1);
      },
      duringGetTypes(index, modelType){
        this.itemAttrs.modelType = modelType;
        this.itemAttrs.chooseTittle =  this.typeList[modelType].name;

        this.itemAttrs.curIndex = index;
        this.itemAttrs.modalChoose = true;
        let that = this;

        let response = doDataPost('/product/getItemTypes', {
          type: this.itemAttrs.modelType,
          exist: 1,
        });
        response.then(function (result) {
          let i;
          if (that.items[that.itemAttrs.curIndex].selectTypesArray){
            for (i in result.data){
              result.data[i].checked = that.items[that.itemAttrs.curIndex].selectTypesArray[that.itemAttrs.modelType].indexOf(result.data[i].uid) !== -1;
            }
          }else{
            for (i in result.data){
              result.data[i].checked = that.items[that.itemAttrs.curIndex].selectTypes.indexOf(result.data[i].uid) !== -1;
            }
          }
          that.itemTypes.splice(0, that.itemTypes.length);
          for (i in result.data){
            that.itemTypes.push(result.data[i]);
          }
        });
      },
    },
    components:{
      headTop,
      chooseContent,
      paperTop,
      paperBottom,
      slider,
      paperItem
    },
  }
</script>

