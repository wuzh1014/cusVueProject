<template>
  <div class="paper">
    <el-container class="box">
      <headTop
        :hideNumFlag="hideNumFlag"
        :headTitle="titleName"
        @showTitle="showTitle"
        @comfirmPage="comfirmPage"></headTop>
      <el-main>
        <el-row>
          <el-col :span="6" v-if="contentId">
            <b>订单号 : </b><span>{{contentId}}</span>
          </el-col>

          <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
          <el-col :span="6">
            <b>姓名 : </b><span v-if="hideNumFlag">{{name}}</span>
          </el-col>
          <el-col :span="6">
            <b>地址 : </b><span v-if="hideNumFlag">{{address}}</span>
          </el-col>
          <el-col :span="6">
            <b>手机 : </b><span v-if="hideNumFlag">{{mobile}}</span>
          </el-col>
          <el-col :span="6">
            <b>电话 : </b><span v-if="hideNumFlag">{{phone}}</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
          <el-col :span="6">
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="姓名"
              prefix-icon="el-icon-edit"
              v-model="name">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="地址"
              prefix-icon="el-icon-location-outline"
              v-model="address">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="手机"
              prefix-icon="el-icon-mobile-phone"
              v-model="mobile">
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="电话"
              prefix-icon="el-icon-phone-outline"
              v-model="phone">
            </el-input>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
        </el-row>

        <el-row>
          <el-card class="box-card" :key="index" v-for="(item, index) in items" >
            <div slot="header" class="clearfix">
              <span>第{{index + 1}}</span>
              <el-button v-if="!hideNumFlag" @click="removeItem(index)"
                style="float: right; padding: 3px 0" type="text" >删除</el-button>
            </div>
            <el-col :span="24">
              <el-button v-if="!hideNumFlag" @click="duringGetTypes(index, 0)"
                         size="mini" type="success" plain>轨道</el-button>
              <b v-else>轨道 : </b>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.upLong"></el-input-number>
              <span v-else>{{item.upLong}}</span>
              <span>米 x </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.upTime"></el-input-number>
              <span v-else>{{item.upTime}}</span>
              <span>条</span>
            </el-col>

            <el-col :span="24" v-if="item.typeNames[0].length>0">
              <span>(</span>
              <span v-for="iname in item.typeNames[0]">{{iname}} </span>
              <span>)</span>
            </el-col>

            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

            <el-col :span="24">
              <el-button v-if="!hideNumFlag" @click="duringGetTypes(index, 1)"
                         size="mini" type="success" plain>天花</el-button>
              <b v-else>天花 : </b>
              <span v-if="item.typeNames[1].length>0">
                <span>(</span>
                <span v-for="iname in item.typeNames[1]"> {{iname}} </span>
                <span>)</span>
              </span>
            </el-col>


            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

            <el-col :span="24">
              <span>[ </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.allLong"></el-input-number>
              <span v-else>{{item.allLong}}</span>
              <span>米 / 高 ] [ </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.flag"></el-input-number>
              <span v-else>{{item.flag}}</span>
              <span>幅 ] [ </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.count"></el-input-number>
              <span v-else>{{item.count}}</span>
              <span>个 ]</span>
            </el-col>

            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

            <el-col :span="24">
              <el-button v-if="!hideNumFlag" @click="duringGetTypes(index, 2)" size="mini" type="success" plain>布</el-button>
              <b v-else>布 : </b>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.inLong"></el-input-number>
              <span v-else>{{item.inLong}}</span>
              <span>米 x </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.inTime"></el-input-number>
              <span v-else>{{item.inTime}}</span>
              <span>条</span>
              <el-tag size="mini">共{{item.inMeter}}米</el-tag>
            </el-col>

            <el-col :span="24" v-if="item.typeNames[2].length>0">
              <span>(</span>
              <span v-for="iname in item.typeNames[2]"> {{iname}} </span>
              <span>)</span>
            </el-col>

            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
            <el-col :span="24">
              <el-button v-if="!hideNumFlag" @click="duringGetTypes(index, 3)"
                         size="mini" type="success" plain>纱</el-button>
              <b v-else>纱 : </b>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.bottomLong"></el-input-number>
              <span v-else>{{item.bottomLong}}</span>
              <span>米 x </span>
              <el-input-number v-if="!hideNumFlag" size="mini" v-model="item.bottomTime"></el-input-number>
              <span v-else>{{item.bottomTime}}</span>
              <span>条</span>
              <el-tag size="mini">共{{item.bottomMeter}}米</el-tag>
            </el-col>

            <el-col :span="24" v-if="item.typeNames[3].length>0">
              <span>(</span>
              <span v-for="iname in item.typeNames[3]"> {{iname}} </span>
              <span>)</span>
            </el-col>

            <el-col :span="24" class="clearfix" style="height: 15px"></el-col>
          </el-card>
          <el-card v-if="!hideNumFlag" class="box-card addFrame">
            <i class="el-icon-plus" @click="createItem()"></i>
          </el-card>
        </el-row>


        <el-row>
          <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
          <el-col :span="10">
            <el-date-picker
              v-model="reciveTime" type="datetime"
              placeholder="时间" size="mini">
            </el-date-picker>
          </el-col>
          <el-col :span="12">
            <el-checkbox v-model="cutFlag" label="剪好" border size="mini"></el-checkbox>
            <el-checkbox v-model="sliceFlag" label="介好" border size="mini"></el-checkbox>
            <el-checkbox v-model="packFlag" label="入袋" border size="mini"></el-checkbox>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"> </el-col>
          <el-col :span="6">
            <b>合计 : </b><span v-if="hideNumFlag">{{prize}}</span>
          </el-col>
          <el-col :span="6">
            <b>订金 : </b><span v-if="hideNumFlag">{{preMoney}}</span>
          </el-col>
          <el-col :span="6">
            <b>实欠 : </b><span v-if="hideNumFlag">{{restMoney}}</span>
          </el-col>
          <el-col :span="6">
            <b>签收人 : </b><span v-if="hideNumFlag">{{operator}}</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"> </el-col>
          <el-col v-if="!hideNumFlag" :span="6">
            <el-input-number size="mini" v-model="prize"></el-input-number>
          </el-col>
          <el-col v-if="!hideNumFlag" :span="6">
            <el-input-number size="mini" v-model="preMoney"></el-input-number>
          </el-col>
          <el-col v-if="!hideNumFlag" :span="6">
            <el-input-number size="mini" v-model="restMoney"></el-input-number>
          </el-col>
          <el-col v-if="!hideNumFlag" :span="6">
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="签收人"
              prefix-icon="el-icon-edit"
              v-model="operator">
            </el-input>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
          <el-col :span="24">
            <b>备注 : </b>
            <el-input
              size="mini"
              v-if="!hideNumFlag"
              placeholder="备注"
              prefix-icon="el-icon-edit"
              type="textarea"
              v-model="memo">
            </el-input>
            <span v-else>{{memo}}</span>
          </el-col>
          <el-col :span="24" v-if="createTime">
            <b>创建日期 : </b><span>{{createTime}}</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 4px"></el-col>

        </el-row>
        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
      </el-main>
    </el-container>


    <el-dialog
      :title="chooseTittle"
      :visible.sync="modalChoose" append-to-body center>
      <chooseContent
        :items="items"
        :modelType="modelType"
        :itemTypes="itemTypes"
        :curIndex="curIndex"></chooseContent>
      <span slot="footer" class="dialog-footer">
        <!--<el-button @click="modalChoose=!modalChoose">取 消</el-button>-->
        <el-button type="primary" @click="modalChoose=!modalChoose">确 定</el-button>
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
      font-size: 15px;
      padding-top: 70px;
      .el-card{
        width: auto;
        height: auto;
        display: inline-block;
      }
      .addFrame{
        text-align: center;
        i{
          cursor: pointer;
          font-size: 80px;
        }
      }
    }
  }
</style>
<script>
  import chooseContent from '@/components/paper/chooseContent'
  import headTop from '@/components/paper/head'
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
        selectTypes: [],
        selectTypesArray: [
          [],[],[],[]
        ],
        typeNames: [
          [],[],[],[]
        ]
      };
      return {
        titleName:'订单名称',
        items: [],
        chooseTittle: '',
        defaultItem: defaultItem,
        titleFlag: false,
        modalChoose: false,
        modelType: 0,
        hideNumFlag: 0,
        itemTypes: [],
        curIndex: '',
        address: '',
        mobile: '',
        phone: '',
        name: '',
        contentId: '',
        createTime: '',
        reciveTime: '',
        memo: '',
        prize: 0,
        preMoney: 0,
        restMoney: 0,
        cutFlag: false,
        sliceFlag: false,
        packFlag: false,
        operator: '',
        editFlag: 1,
      }
    },
    props: {
    },
    watch: {
      items:{
        handler(){
          for (var i in this.items){
            this.items[i].bottomMeter = this.items[i].bottomLong * this.items[i].bottomTime
            this.items[i].inMeter = this.items[i].inLong * this.items[i].inTime
          }
        },
        deep:true,
      },
    },
    created(){
      this.init();
    },
    methods: {
      async init() {
        var query = this.$route.query;
        if (query.contentId){
          this.contentId = query.contentId;
        }
        if (query.hideNumFlag){
          this.hideNumFlag = query.hideNumFlag;
        }
        if (this.contentId){
          let that = this;
          let response = doDataPost('/product/getBill', {
            uid: this.contentId,
          });
          response.then(function (result) {
            if (result.data.code){
              var billContent = result.data.billContent[0];
              that.address = billContent.address;
              that.mobile = billContent.mobile;
              that.phone = billContent.phone;
              that.memo = billContent.memo;
              that.name = billContent.name;
              that.prize = billContent.prize;
              if (!billContent.titleName){
                that.titleName = '订单:' + that.contentId;
              }else{
                that.titleName = billContent.titleName;
              }
              if (billContent.reciveTime){
                that.reciveTime = new Date(billContent.reciveTime);
              }else{
                that.reciveTime = '';
              }
              if (billContent.createTime){
                that.createTime = new Date(billContent.createTime);
                that.createTime = that.createTime.getFullYear() + '年'
                  + that.createTime.getMonth() + '月' + that.createTime.getDate() + '日 '
                  + that.createTime.getHours() + ':' +that.createTime.getMinutes();
              }else{
                that.createTime = '';
              }
              that.preMoney = billContent.preMoney;
              that.restMoney = billContent.restMoney;
              that.cutFlag = billContent.cutFlag?true:false;
              that.sliceFlag = billContent.sliceFlag?true:false;
              that.packFlag = billContent.packFlag?true:false;
              that.operator = billContent.operator;
              for (var i in result.data.items){
                result.data.items[i].typeNames =
                  JSON.parse(JSON.stringify(that.defaultItem.typeNames));
              }
              that.items = result.data.items;
              that.initSetTypeNames();
            }else{
              that.items.push(JSON.parse(JSON.stringify(that.defaultItem)));
            }
          });
        }else {
          this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
        }
      },
      createItem(){
        this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
      },
      removeItem(index){
        this.items.splice(index, 1);
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
          memo: this.memo,
          items: this.items,
          address: this.address,
          mobile: this.mobile,
          phone: this.phone,
          name: this.name,
          prize: this.prize,
          reciveTime: this.reciveTime,
          preMoney: this.preMoney,
          restMoney: this.restMoney,
          cutFlag: this.cutFlag,
          sliceFlag: this.sliceFlag,
          packFlag: this.packFlag,
          operator: this.operator,
          titleName: this.titleName,
        });
        response.then(function (result) {
          that.contentId = result.data.contentId;
          that.$message({
            type: 'success',
            message: '保存成功!'
          });
        });
        this.hideNumFlag = !this.hideNumFlag;
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
                }
              }
            }
          });
        }
      },
      duringGetTypes(index, modelType){
        this.modelType = modelType;
        switch (modelType){
          case 0:this.chooseTittle = '轨道配件';break;
          case 1:this.chooseTittle = '天花板配件';break;
          case 2:this.chooseTittle = '布料类型';break;
          case 3:this.chooseTittle = '纱布类型';break;
        }
        this.curIndex = index;
        this.modalChoose = true;

        let that = this;
        let response = doDataPost('/product/getItemTypes', {
          type: this.modelType,
          exist: 1,
        });
        response.then(function (result) {
          if (that.items[that.curIndex].selectTypesArray){
            for (var i in result.data){
              if (that.items[that.curIndex].selectTypesArray[that.modelType].indexOf(result.data[i].uid) != -1){
                result.data[i].checked = true;
              }else{
                result.data[i].checked = false;
              }
            }
          }else{
            for (var i in result.data){
              if (that.items[that.curIndex].selectTypes.indexOf(result.data[i].uid) != -1){
                result.data[i].checked = true;
              }else{
                result.data[i].checked = false;
              }
            }
          }
          that.itemTypes = result.data;
        });
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
    components:{headTop, chooseContent},
  }
</script>

