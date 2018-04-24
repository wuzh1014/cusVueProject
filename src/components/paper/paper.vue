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
          @comfirmPage="comfirmPage"></headTop>
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
        itemAttrs: {
          curIndex: '',
          modalChoose: false,
          modelType: 0,
          chooseTittle: '',
          hideNumFlag: 0,
          sliderIndex: 0,
          sliderFlag: 1,
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
              let billContent = result.data.billContent[0];
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
              for (let i in result.data.items){
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

      comfirmPage(){
        let that = this;
        for (let i in this.items){
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
        for(let k in [0, 1, 2, 3]){
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
        switch (modelType){
          case 0:this.itemAttrs.chooseTittle = '导轨类型';break;
          case 1:this.itemAttrs.chooseTittle = '导轨配件';break;
          case 2:this.itemAttrs.chooseTittle = '帘头类型';break;
          case 3:this.itemAttrs.chooseTittle = '帘头配件';break;
          case 4:this.itemAttrs.chooseTittle = '安装类型';break;
          case 5:this.itemAttrs.chooseTittle = '布料类型';break;
          case 6:this.itemAttrs.chooseTittle = '布料配件';break;
          case 7:this.itemAttrs.chooseTittle = '纱布类型';break;
          case 8:this.itemAttrs.chooseTittle = '纱布配件';break;
          case 9:this.itemAttrs.chooseTittle = '其他配件';break;
          case 10:this.itemAttrs.chooseTittle = '拉帘类型';break;
          case 11:this.itemAttrs.chooseTittle = '导轨型号';break;
        }
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

