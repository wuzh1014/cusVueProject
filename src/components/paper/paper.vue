<template>
  <div class="paper">

    <el-container class="box">
      <headTop
        :hideNumFlag="itemAttrs.hideNumFlag"
        :headTitle="titleName"
        @showTitle="showTitle"
        @printPaper="printPaper"
        @comfirmPage="comfirmPage"></headTop>
      <el-main>
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
                   ></paperItem>

        <paperBottom
          :itemAttrs="itemAttrs"
          :createTime="createTime"
          :orderDetail="orderDetail"
        ></paperBottom>

        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
      </el-main>
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
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    background-color: #fff;
    overflow: auto;
    .box{
      font-size: 20px;
      padding-top: 70px;
    }
  }
</style>
<script>
  import chooseContent from '@/components/paper/chooseContent'
  import headTop from '@/components/paper/head'
  import paperTop from '@/components/paper/paperTop'
  import paperBottom from '@/components/paper/paperBottom'
  import paperItem from '@/components/paper/paperItem'
  import {doDataPost} from '@/service/getData'

  export default {
    name: 'paper',
    data () {
      const defaultItem = {
        upLong: 0,
        upTime: 0,
        upMeter: 0,
        inTime: 0,
        inMeter: 0,
        inLong: 0,
        bottomLong: 0,
        bottomTime: 0,
        bottomMeter: 0,
        allLong: 0,
        flag: 0,
        count: 0,
        needHead: 1,
        selectTypes: [],
        selectTypesArray: [
          [],[],[],[]
        ],
        typeNames: [
          [],[],[],[]
        ],
        typePrizes: [
          [],[],[],[]
        ]
      };
      return {
        titleName:'订单名称',
        initItemSize: 7,
        items: [],
        defaultItem: defaultItem,
        titleFlag: false,
        itemTypes: [],
        itemAttrs: {
          curIndex: '',
          modalChoose: false,
          modelType: 0,
          chooseTittle: '',
          hideNumFlag: 0,
        },
        countAttrs: {
          allUpLong: 0,
          allUpTime: 0,
          allInMeter: 0,
          allInTime: 0,
          allBottomMeter: 0,
          allBottomTime: 0,
          allAllLong: 0,
          allCount: 0,
          allFlag: 0,
        },
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
      printPaper(){
        let bdhtml = window.document.body.innerHTML;
        window.document.body.innerHTML = $(".el-main").html();
        window.print();
        window.location.reload();
      },
      async init() {
        var query = this.$route.query;
        if (query.contentId){
          this.contentId = query.contentId;
        }
        if (query.hideNumFlag){
          this.itemAttrs.hideNumFlag = query.hideNumFlag;
        }
        if (this.contentId){
          let that = this;
          let response = doDataPost('/product/getBill', {
            uid: this.contentId,
          });
          response.then(function (result) {
            if (result.data.code){
              var billContent = result.data.billContent[0];
              that.orderDetail.address = billContent.address;
              that.orderDetail.mobile = billContent.mobile;
              that.orderDetail.phone = billContent.phone;
              that.orderDetail.memo = billContent.memo;
              that.orderDetail.name = billContent.name;
              that.orderDetail.prize = billContent.prize;
              if (!billContent.titleName){
                that.titleName = '订单:' + that.contentId;
              }else{
                that.titleName = billContent.titleName;
              }
              if (billContent.reciveTime){
                that.orderDetail.reciveTime = new Date(billContent.reciveTime);
              }else{
                that.orderDetail.reciveTime = '';
              }
              if (billContent.createTime){
                that.createTime = new Date(billContent.createTime);
                that.createTime = that.createTime.getFullYear() + '年'
                  + that.createTime.getMonth() + '月' + that.createTime.getDate() + '日 '
                  + that.createTime.getHours() + ':' +that.createTime.getMinutes();
              }else{
                that.createTime = '';
              }
              that.orderDetail.preMoney = billContent.preMoney;
              that.orderDetail.restMoney = billContent.restMoney;
              that.orderDetail.cutFlag = !!billContent.cutFlag;
              that.orderDetail.sliceFlag = !!billContent.sliceFlag;
              that.orderDetail.packFlag = !!billContent.packFlag
              that.orderDetail.operator = billContent.operator;
              for (var i in result.data.items){
                result.data.items[i].typeNames = JSON.parse(JSON.stringify(that.defaultItem.typeNames));
                result.data.items[i].typePrizes = JSON.parse(JSON.stringify(that.defaultItem.typePrizes));
              }
              that.items = result.data.items;
              that.initSetTypeNames();
            }else{
              that.items.push(JSON.parse(JSON.stringify(that.defaultItem)));
            }
          });
        }else {
            for(let i = 0;i < this.initItemSize;i++){
              this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
            }
        }
      },

      comfirmPage(){
        let that = this;
        for (var i in this.items){
          if (this.items[i].selectTypesArray){
            this.items[i].selectTypes = [].concat(
              this.items[i].selectTypesArray[0],
              this.items[i].selectTypesArray[1],
              this.items[i].selectTypesArray[2],
              this.items[i].selectTypesArray[3]
            );
          }
        }

        let response = doDataPost('/product/createBill', {
          contentId: this.contentId,
          memo: this.orderDetail.memo,
          items: this.items,
          address: this.orderDetail.address,
          mobile: this.orderDetail.mobile,
          phone: this.orderDetail.phone,
          name: this.orderDetail.name,
          prize: this.orderDetail.prize,
          reciveTime: this.orderDetail.reciveTime,
          preMoney: this.orderDetail.preMoney,
          restMoney: this.orderDetail.restMoney,
          cutFlag: this.orderDetail.cutFlag,
          sliceFlag: this.orderDetail.sliceFlag,
          packFlag: this.orderDetail.packFlag,
          operator: this.orderDetail.operator,
          titleName: this.titleName,
        });
        response.then(function (result) {
          that.contentId = result.data.contentId;
          that.$message({
            type: 'success',
            message: '保存成功!'
          });
        });
        this.itemAttrs.hideNumFlag = !this.itemAttrs.hideNumFlag;
      },
      initSetTypeNames(){
        for(var k in [0, 1, 2, 3]){
          let that = this;
          let response = doDataPost('/product/getItemTypes', {
            type: k,
          });
          response.then(function (result) {
            for (var t in result.data){
              for (var i in that.items){
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
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = str.match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      },
      showTitle(){
        this.titleFlag = !this.titleFlag;
      },
    },
    components:{
      headTop,
      chooseContent,
      paperTop,
      paperBottom,
      paperItem
    },
  }
</script>

