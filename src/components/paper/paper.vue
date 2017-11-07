<template>
  <div class="paper">
    <headTop :headTitle="titleName"></headTop>

    <div class="box">
      <div class="container-fluid">
        <div class="row flex">
          <div class="col-md-8 flex-top item" v-for="(item,index) in items" >
            <div class="container frame">

              <div class="row flex row-up flex-middle">
                <div class="col-md-4 flex-end">
                  <at-button type="info" size="small" @click="modalChoose=true">轨</at-button>
                </div>
                <div class="col-md-7">
                  <at-input-number v-if="!hideNumInput" v-model="item.upLong" size="small" :min="0" :step="0.1"></at-input-number>
                  <span class="replaceSpan" v-if="hideNumInput">{{item.upLong}}</span>
                </div>
                <div class="col-md-2">
                  <span>米</span>
                </div>
                <div class="col-md-1">
                  <span>x</span>
                </div>
                <div class="col-md-7">
                  <at-input-number v-if="!hideNumInput" v-model="item.upTime" size="small" :min="0"></at-input-number>
                  <span class="replaceSpan" v-if="hideNumInput">{{item.upTime}}</span>
                </div>
                <div class="col-md-2">
                  <span>条</span>
                </div>
              </div>

              <div class="row flex row-up flex-middle">
                <div class="col-md-4 col-md-offset-18">
                  <at-button type="info" icon="icon-type" size="small" circle @click="modalChoose=true"></at-button>
                </div>
              </div>

              <div class="row flex row-mid">
                <div class="col-md-12">
                  <div class="row flex flex-middle split-row">
                    <div class="col-md-24">
                      <div class="row flex flex-middle">
                        <div class="col-md-15" v-if="!hideNumInput">
                          <at-input-number v-model="item.allLong" :min="0" :step="0.1"></at-input-number>
                        </div>
                        <div class="col-md-10" v-if="hideNumInput">
                          <span class="replaceSpan">{{item.flag}}</span>
                        </div>
                        <div class="col-md-9" v-if="!hideNumInput">
                          <span>米/高</span>
                        </div>
                        <div class="col-md-14" v-if="hideNumInput">
                          <span>米/高</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row flex flex-middle split-row">
                    <div class="col-md-24">
                      <div class="row flex flex-middle">
                        <div class="col-md-15">
                          <at-input-number v-if="!hideNumInput" v-model="item.flag" :min="0"></at-input-number>
                          <span class="replaceSpan" v-if="hideNumInput">{{item.flag}}</span>
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
                          <at-input-number v-if="!hideNumInput" v-model="item.count" :min="0"></at-input-number>
                          <span class="replaceSpan" v-if="hideNumInput">{{item.count}}</span>
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
                      <at-button type="info" size="small" @click="modalChoose=true">布</at-button>
                    </div>
                  </div>
                  <div class="row flex flex-middle">
                    <div class="col-md-15">
                      <at-input-number v-if="!hideNumInput" v-model="item.inLong" size="small" :min="0" :step="0.1"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumInput">{{item.inLong}}</span>
                    </div>
                    <div class="col-md-9">
                      <span>米</span>
                    </div>
                    <div class="col-md-15">
                      <at-input-number v-if="!hideNumInput" v-model="item.inTime" size="small" :min="0"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumInput">{{item.inTime}}</span>
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

              <div class="row flex flex-middle row-bottom">
                <div class="col-md-24">
                  <div class="row flex flex-middle">
                    <div class="col-md-4 flex-end">
                      <at-button type="info" size="small" @click="modalChoose=true">纱</at-button>
                    </div>
                    <div class="col-md-7">
                      <at-input-number v-if="!hideNumInput" v-model="item.bottomLong" size="small" :min="0" :step="0.1"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumInput">{{item.bottomLong}}</span>
                    </div>
                    <div class="col-md-2">
                      <span>米</span>
                    </div>
                    <div class="col-md-1">
                      <span>x</span>
                    </div>
                    <div class="col-md-7">
                      <at-input-number v-if="!hideNumInput" v-model="item.bottomTime" size="small" :min="0"></at-input-number>
                      <span class="replaceSpan" v-if="hideNumInput">{{item.bottomTime}}</span>
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
        </div>
      </div>
    </div>


    <at-modal v-model="modalChoose">
      <div slot="header" style="text-align:center;">
        <span>{{chooseTittle}}</span>
      </div>
      <chooseContent :modelType="modelType"></chooseContent>
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
          border: 1px solid #000;
          position: relative;
          padding: 5px;
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
      }
    }
  }
</style>
<script>
  import chooseContent from '@/components/paper/chooseContent'
  import headTop from '@/components/paper/head'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import {getcarousel, hotcomment} from '@/service/getData'
  export default {
    name: 'paper',
    data () {
      return {
        titleName:'开单',
        items: [],
        chooseTittle: '1',
        modalChoose: false,
        modelType: '001',
        hideNumInput: 0,
      }
    },
    watch: {
      items:{
        handler(curVal, oldVal){
          console.log('xxx');
          for (var i = 0; i < this.items.length; i++){
            this.items[i].bottomMeter = this.items[i].bottomLong * this.items[i].bottomTime
            this.items[i].inMeter = this.items[i].inLong * this.items[i].inTime
          }
        },
        deep:true,
      }
    },
    computed: {
    },
    created(){
      console.log('created');
    },
    mounted(){
      this.init();
      this.comfirmPage();
      console.log('mounted');
    },
    destroyed(){
      console.log('destroyed');
    },
    methods: {
      async init() {
        this.items= [{
          upLong: 1,
          upTime: 1,
          upMeter: 1,
          allLong: 1,
          flag: 1,
          count: 1,
          inLong: 2,
          inTime: 2,
          inMeter: 1,
          bottomLong: 0.1,
          bottomTime: 2,
          bottomMeter: 1,
        }];
        this.items.push(this.items[0])
        this.items.push(this.items[0])
        this.items.push(this.items[0])
        this.items.push(this.items[0])
      },
      comfirmPage(){
        console.log('destroxye11d');
        console.log($(".item .at-input-number"));
      },
      GetQueryString(str,name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = str.match(reg);
        if(r!=null)return  unescape(r[2]); return null;
      }
    },
    components:{headTop, chooseContent},

  }
</script>

