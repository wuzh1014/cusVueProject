<template>
  <div class="paper">
    <headTop :headTitle="titleName" @comfirmPage="comfirmPage"></headTop>
    <div class="box">
      <div class="container-fluid">
        <div class="row flex">
          <div class="col-md-24" v-if="contentId">
            <b>订单号&nbsp;:&nbsp;</b><span>{{contentId}}</span>
          </div>
          <div class="col-md-6">
            <b>姓名&nbsp;:&nbsp;</b><span v-if="hideNumFlag">{{name}}</span>
          </div>
          <div class="col-md-6">
            <b>地址&nbsp;:&nbsp;</b><span v-if="hideNumFlag">{{address}}</span>
          </div>
          <div class="col-md-6">
            <b>手机&nbsp;:&nbsp;</b><span v-if="hideNumFlag">{{mobile}}</span>
          </div>
          <div class="col-md-6">
            <b>电话&nbsp;:&nbsp;</b><span v-if="hideNumFlag">{{phone}}</span>
          </div>
          <div class="col-md-6">
            <at-input v-if="!hideNumFlag" v-model="name" placeholder="姓名" status="success" icon="info"></at-input>
          </div>
          <div class="col-md-6">
            <at-input v-if="!hideNumFlag" v-model="address" placeholder="地址" status="success" icon="info"></at-input>
          </div>
          <div class="col-md-6">
            <at-input v-if="!hideNumFlag" v-model="mobile" placeholder="手机" status="success" icon="info"></at-input>
          </div>
          <div class="col-md-6">
            <at-input v-if="!hideNumFlag" v-model="phone" placeholder="电话" status="success" icon="info"></at-input>
          </div>
        </div>

        <div class="row flex">
          <div class="col-md-8 flex-top item" v-for="(item, index) in items" >
            <div class="container frame itemFrame">
              <div class="row flex row-up flex-middle">
                <div class="col-md-4 flex-end">
                  <at-button type="info" size="small" @click="duringGetTypes(index, 1)">轨</at-button>
                </div>
                <div class="col-md-7">
                  <!--<el-input-number v-if="!hideNumFlag" size="mini" v-model="item.upLong"></el-input-number>-->
                  <at-input-number v-if="!hideNumFlag" v-model="item.upLong" size="small" :min="0" :step="0.1"></at-input-number>
                  <span class="replaceSpan" v-else>{{item.upLong}}</span>
                </div>
                <div class="col-md-2">
                  <span>米</span>
                </div>
                <div class="col-md-1">
                  <span>x</span>
                </div>
                <div class="col-md-7">
                  <at-input-number v-if="!hideNumFlag" v-model="item.upTime" size="small" :min="0"></at-input-number>
                  <span class="replaceSpan" v-else>{{item.upTime}}</span>
                </div>
                <div class="col-md-2">
                  <span>条</span>
                </div>
              </div>

              <div class="row flex row-up flex-middle">
                <div class="col-md-4 col-md-offset-18">
                  <at-button type="info" icon="icon-type" size="small" circle @click="duringGetTypes(index, 2)"></at-button>
                </div>
              </div>

              <div class="row flex row-mid">
                <div class="col-md-12">
                  <div class="row flex flex-middle split-row">
                    <div class="col-md-24">
                      <div class="row flex flex-middle">
                        <div class="col-md-15" v-if="!hideNumFlag">
                          <at-input-number v-model="item.allLong" :min="0" :step="0.1"></at-input-number>
                        </div>
                        <div class="col-md-10" v-else>
                          <span class="replaceSpan">{{item.allLong}}</span>
                        </div>
                        <div class="col-md-9" v-if="!hideNumFlag">
                          <span>米/高</span>
                        </div>
                        <div class="col-md-14" v-else>
                          <span>米/高</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row flex flex-middle split-row">
                    <div class="col-md-24">
                      <div class="row flex flex-middle">
                        <div class="col-md-15">
                          <at-input-number v-if="!hideNumFlag" v-model="item.flag" :min="0"></at-input-number>
                          <span class="replaceSpan" v-else>{{item.flag}}</span>
                        </div>
                        <div class="col-md-9">
                          <span>幅</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row flex flex-middle split-row">
                    <div class="col-md-24">
                      <div class="row flex flex-middle">
                        <div class="col-md-15">
                          <at-input-number v-if="!hideNumFlag" v-model="item.count" :min="0"></at-input-number>
                          <span class="replaceSpan" v-else>{{item.count}}</span>
                        </div>
                        <div class="col-md-9">
                          <span>个</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 inner">
                  <div class="row" style="height: 28%;">
                    <div class="col-md-7">
                      <at-button type="info" size="small" @click="duringGetTypes(index, 3)">布</at-button>
                    </div>
                  </div>
                  <div class="row flex flex-middle">
                    <div class="col-md-15">
                      <at-input-number v-if="!hideNumFlag" v-model="item.inLong" size="small" :min="0" :step="0.1"></at-input-number>
                      <span class="replaceSpan" v-else>{{item.inLong}}</span>
                    </div>
                    <div class="col-md-9">
                      <span>米</span>
                    </div>
                    <div class="col-md-15">
                      <at-input-number v-if="!hideNumFlag" v-model="item.inTime" size="small" :min="0"></at-input-number>
                      <span class="replaceSpan" v-else>{{item.inTime}}</span>
                    </div>
                    <div class="col-md-9">
                      <span>条</span>
                    </div>
                    <div class="col-md-24">
                      <at-tag>共{{item.inMeter}}米</at-tag>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row flex row-bottom flex-middle">
                <div class="col-md-24">
                  <div class="row flex flex-middle">
                    <div class="col-md-4 flex-end">
                      <at-button type="info" size="small" @click="duringGetTypes(index, 4)">纱</at-button>
                    </div>
                    <div class="col-md-7">
                      <at-input-number v-if="!hideNumFlag" v-model="item.bottomLong" size="small" :min="0" :step="0.1"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumFlag">{{item.bottomLong}}</span>
                    </div>
                    <div class="col-md-2">
                      <span>米</span>
                    </div>
                    <div class="col-md-1">
                      <span>x</span>
                    </div>
                    <div class="col-md-7">
                      <at-input-number v-if="!hideNumFlag" v-model="item.bottomTime" size="small" :min="0"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumFlag">{{item.bottomTime}}</span>
                    </div>
                    <div class="col-md-2">
                      <span>条</span>
                    </div>
                  </div>
                  <div class="row flex flex-middle">
                    <div class="col-md-12 col-md-offset-4">
                      <at-tag>共{{item.bottomMeter}}米</at-tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 flex-top item" v-if="!hideNumFlag">
            <div class="container frame addFrame">
              <i class="icon icon-plus-square" @click="createItem()"></i>
            </div>
          </div>
        </div>


        <div class="row flex footerDetail">
          <div class="col-md-10">
            <el-date-picker v-model="reciveTime" type="datetime"
                            placeholder="时间" size="mini">
            </el-date-picker>
          </div>
          <div class="col-md-12">
            <at-checkbox-group>
              <at-checkbox v-model="cutFlag">剪好</at-checkbox>
              <at-checkbox v-model="sliceFlag">介好</at-checkbox>
              <at-checkbox v-model="packFlag">入袋</at-checkbox>
            </at-checkbox-group>
          </div>
          <div class="col-md-24" style="line-height: 4px">&nbsp;</div>
          <div class="col-md-6">
            <b>合计</b>
          </div>
          <div class="col-md-6">
            <b>订金</b>
          </div>
          <div class="col-md-6">
            <b>实欠</b>
          </div>
          <div class="col-md-6">
            <b>签收人</b>
          </div>
          <div class="col-md-6">
            <el-input-number size="mini" v-model="prize"></el-input-number>
          </div>
          <div class="col-md-6">
            <el-input-number size="mini" v-model="preMoney"></el-input-number>
          </div>
          <div class="col-md-6">
            <el-input-number size="mini" v-model="restMoney"></el-input-number>
          </div>
          <div class="col-md-6">
            <at-input v-model="operator" placeholder="签收人" status="success" icon="info"></at-input>
          </div>
        </div>
      </div>
    </div>

    <at-modal v-model="modalChoose">
      <div slot="header" style="text-align:center;">
        <span>{{chooseTittle}}</span>
      </div>
      <chooseContent :itemTypes="itemTypes" :curIndex="curIndex"></chooseContent>
      <div slot="footer">
        <at-button style="width:100%;" type="primary" @click="modalChoose=false">确认</at-button>
      </div>
    </at-modal>

  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
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
      width: 100%;
      height: 100%;
      overflow: auto;
      padding-top: 1.093333rem;
      .item{
        padding: 10px;
        height: 35vw;
        .frame{
          width: 100%;
          height: 100%;
          border-radius: 5%;
          position: relative;
          padding: 5px;
        }
        .itemFrame{
          border: 1px solid #000;
          .inner{
            border: 1px solid gray;
            border-radius: 5%;
            padding: 5px;
          }
          .row-up{
            height: 13%;
          }
          .row-mid{
            height: 50%;
            .split-row{
              height: 33%;
            }
          }
          .row-bottom{
            height: 24%;
          }
          .at-input-number{
            width: 1rem;
          }
          .at-btn{
            width: 0.5rem;
            padding: 1px 4px 1px 4px;
          }
          .at-btn.at-btn--circle{
            width: 28px;
            height: 28px;
          }
          .replaceSpan{
            float: right;
          }
          .at-tag{
            margin-top: 5px;
          }
        }
        .addFrame{
          text-align: center;
          .icon{
            @include center;
            line-height: 80px;
            font-size: 80px;
          }
        }
      }
      .footerDetail{
        .at-checkbox-group{
          line-height: 25px;
        }
      }


      .calendar-dialog{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
      }

      .calendar-dialog-mask{
        background:rgba(255,255,255,.5);
        width:100%;
        height:100%;
      }

      .calendar-dialog-body{
        background: #fff;
        position: absolute;
        left:50%;
        top:30%;
        transform: translate(-50%,-50%);
        padding:20px;
        border: 1px solid #eee;
        border-radius: 2px;
        min-width: 5.2rem;
        min-height: 5.5rem;
        z-index: 1;
      }


    }
  }


</style>
<script>
  import chooseContent from '@/components/paper/chooseContent'
  import headTop from '@/components/paper/head'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import {doDataPost} from '@/service/getData'
  import calendar from '../calendar/calendar.vue'

  export default {
    name: 'paper',
    data () {
      return {
//        titleName:'开单',
        titleName:'',
        items: [],
        chooseTittle: '',
        defaultItem: {
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
          selectTypes: []
        },
        modalChoose: false,
        modelType: 1,
        hideNumFlag: 0,
        itemTypes: [],
        curIndex: '',
        address: '',
        mobile: '',
        phone: '',
        name: '',
        contentId: '',
        reciveTime: '',
        prize: 0,
        preMoney: 0,
        restMoney: 0,
        cutFlag: true,
        sliceFlag: true,
        packFlag: true,
        operator: '',
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
      itemTypes:{
        handler(){
          var uidList = [];
          for (var i in this.itemTypes){
              if (this.itemTypes[i].checked){
                uidList.push(this.itemTypes[i].uid);
              }
          }
          this.items[this.curIndex].selectTypes = uidList;
        },
        deep:true,
      }
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
              that.name = billContent.name;
              that.prize = billContent.prize;

              if (billContent.reciveTime){
                that.reciveTime = new Date(billContent.reciveTime);
              }else{
                that.reciveTime = '';
              }
              that.preMoney = billContent.preMoney;
              that.restMoney = billContent.restMoney;
              that.cutFlag = billContent.cutFlag;
              that.sliceFlag = billContent.sliceFlag;
              that.packFlag = billContent.packFlag;
              that.operator = billContent.operator;
              that.items = result.data.items;
            }else{
              that.items.push(that.defaultItem);
            }
          });
        }else {
          this.items.push(this.defaultItem);
        }
      },
      createItem(){
        this.items.push(this.defaultItem);
      },
      comfirmPage(){
        let that = this;
        let response = doDataPost('/product/createBill', {
          contentId: this.contentId,
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
        });
        response.then(function (result) {
          that.contentId = result.data.contentId;
        })
        this.hideNumFlag = !this.hideNumFlag;
      },
      duringGetTypes(index, modelType){
        this.modelType = modelType;
        switch (modelType){
          case 1:this.chooseTittle = '轨道配件';break;
          case 2:this.chooseTittle = '天花板配件';break;
          case 3:this.chooseTittle = '布料类型';break;
          case 4:this.chooseTittle = '纱布类型';break;
        }
        this.curIndex = index;
        this.modalChoose = true;

        let that = this;
        let response = doDataPost('/product/getItemTypes', {
          type: this.modelType,
        });
        response.then(function (result) {
          for (var i in result.data){
            if (that.items[that.curIndex].selectTypes.indexOf(result.data[i].uid) != -1){
              result.data[i].checked = true;
            }
          }
          that.itemTypes = result.data;
        });
      },
      GetQueryString(str,name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = str.match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      }
    },
    components:{headTop, chooseContent, calendar},
  }
</script>

