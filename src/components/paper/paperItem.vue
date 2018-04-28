<template>
  <el-row>
    <paperMinItem
               :spanSize="6"
               :itemAttrs="itemAttrs"
               :item="item"
               :items="items"
               :index="index"
               @createItem="createItem"
               @duringGetTypes="duringGetTypes"
               v-for="(item, index) in items"
               v-if="index < 4"
               :key="index"
    ></paperMinItem>
    <el-col :span="24" class="clearfix" style="height: 1px"></el-col>
    <el-col :span="6">
      <paperMinItem
        :spanSize="24"
        :itemAttrs="itemAttrs"
        :item="item"
        :items="items"
        :index="index"
        @createItem="createItem"
        @duringGetTypes="duringGetTypes"
        v-for="(item, index) in items"
        v-if="index > 3"
        :key="index"
      ></paperMinItem>
    </el-col>


    <el-col :span="18" @click.native.stop="hideAllItem()">
      <el-col class="midTitle" :span="24">
        订单统计:
      </el-col>
      <el-col :span="20" :offset="3">
        <el-col class="midList" :span="24" v-for="(count, index) in countAttrs" :key="index">
          {{count}}
        </el-col>
        <!--<el-col class="midList" :span="24">-->
          <!--共{{countAttrs.allUpLong}}米轨道。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{parseInt(countAttrs.allUpTime)}}条轨道。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{countAttrs.allInMeter}}米布。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{parseInt(countAttrs.allInTime)}}条布。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{countAttrs.allBottomMeter}}米纱。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{parseInt(countAttrs.allBottomTime)}}条纱。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{parseInt(countAttrs.allCount)}}个。-->
        <!--</el-col>-->
        <!--<el-col class="midList" :span="24">-->
          <!--共{{parseInt(countAttrs.allFlag)}}幅。-->
        <!--</el-col>-->
      </el-col>
    </el-col>

  </el-row>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
  .midList{
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .midTitle{
    line-height: 1.2rem;
  }
</style>
<script>
  import {doDataPost} from '@/service/getData'
  import paperMinItem from '@/components/paper/paperMinItem'
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    name: 'paperItem',
    data () {
      return {
      }
    },
    props: {
      items:{},
      itemTypes:{},
      itemAttrs:{},
      defaultItem:{},
      countAttrs:{},
      orderDetail:{},
    },
    watch: {
      items:{
        handler(){
          let allUpLong = 0, allUpTime = 0, allInMeter = 0, allInTime = 0, allBottomMeter = 0;
          let allBottomTime = 0, allAllLong = 0, allCount = 0, allFlag = 0, allPrize = 0;

          let itemMap = {};

          for (let i in this.items){

            if (!this.items[i].inLongLock){
              this.items[i].inLong = this.items[i].upLong * this.items[i].inMulti / 2;
            }
            if (!this.items[i].bottomLongLock){
              this.items[i].bottomLong = this.items[i].upLong * this.items[i].bottomMulti / 2;
            }


            this.items[i].inMeter = this.items[i].inLong * parseInt(this.items[i].inTime);
            this.items[i].bottomMeter = this.items[i].bottomLong * parseInt(this.items[i].bottomTime);

            let eachPrize = 0;

            let upTime = parseInt(this.items[i].upTime);
            let eachUpLong = this.items[i].upLong * upTime;
            allUpLong += eachUpLong;
            allUpTime += upTime;
            allInMeter += this.items[i].inMeter;
            allInTime += parseInt(this.items[i].inTime);


            allBottomMeter += this.items[i].bottomMeter;
            allBottomTime += parseInt(this.items[i].bottomTime);
            allAllLong += this.items[i].allLong;


            allCount += parseInt(this.items[i].count);

            let eachFlag = parseInt(this.items[i].flag);
            allFlag += eachFlag;

            if (this.items[i].typeNames[0].length > 0){
              let formatName = this.items[i].typeNames[0][0] + '-' + this.items[i].upLong + '米';
              if (itemMap[formatName]){
                itemMap[formatName] += parseInt(this.items[i].upTime) * eachFlag;
              }else {
                itemMap[formatName] = parseInt(this.items[i].upTime) * eachFlag;
              }
            }

            if (this.items[i].typeNames[2].length > 0){
              let formatName = this.items[i].typeNames[2][0] + '(米)';
              if (itemMap[formatName]){
                itemMap[formatName] += parseFloat(this.items[i].listLong) * eachFlag;
              }else {
                itemMap[formatName] = parseFloat(this.items[i].listLong) * eachFlag;
              }
            }

            if (this.items[i].typeNames[5].length > 0){
              let formatName = this.items[i].typeNames[5][0] + '-' + this.items[i].inLong + '米';
              if (itemMap[formatName]){
                itemMap[formatName] += parseInt(this.items[i].inTime) * eachFlag;
              }else {
                itemMap[formatName] = parseInt(this.items[i].inTime) * eachFlag;
              }
            }

            if (this.items[i].typeNames[7].length > 0){
              let formatName = this.items[i].typeNames[7][0] + '-' + this.items[i].bottomLong + '米';
              if (itemMap[formatName]){
                itemMap[formatName] += parseInt(this.items[i].bottomTime) * eachFlag;
              }else {
                itemMap[formatName] = parseInt(this.items[i].bottomTime) * eachFlag;
              }
            }


            if (this.items[i].typeNames[10].length > 0){
              let formatName = this.items[i].typeNames[10][0] + '(平方米)';
              if (itemMap[formatName]){
                itemMap[formatName] += parseFloat(this.items[i].rollLong) * eachFlag;
              }else {
                itemMap[formatName] = parseFloat(this.items[i].rollLong) * eachFlag;
              }
            }



            if (this.items[i].typePrizes){
              if (this.items[i].typePrizes[0].length > 0){
                eachPrize += this.items[i].typePrizes[0][0] * eachUpLong;
              }
              if (this.items[i].typePrizes[1].length > 0){
                eachPrize += this.items[i].typePrizes[2][0] * this.items[i].inMeter;
              }
              if (this.items[i].typePrizes[1].length > 0){
                eachPrize += this.items[i].typePrizes[3][0] * this.items[i].bottomMeter;
              }
            }

            allPrize += eachPrize * parseInt(this.items[i].count);
          }
          this.countAttrs.splice(0, this.countAttrs.length);
          for (let item in itemMap){
              this.countAttrs.push(item + ' : ' + itemMap[item]);
          }


//          this.countAttrs.allUpLong = allUpLong;
//          this.countAttrs.allUpTime = allUpTime;
//          this.countAttrs.allInMeter = allInMeter;
//          this.countAttrs.allInTime = allInTime;
//          this.countAttrs.allBottomMeter = allBottomMeter;
//          this.countAttrs.allBottomTime = allBottomMeter;
//          this.countAttrs.allAllLong = allAllLong;
//          this.countAttrs.allCount = allCount;
//          this.countAttrs.allFlag = allFlag;
          this.orderDetail.prize = allPrize;
        },
        deep:true,
      },
    },
    created(){
    },
    methods: {
      createItem(){
          if (this.items.length > 0 && this.items[this.items.length - 1].itemMode === 2){
            let top = this.items.pop();
            this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
            this.items.push(top);
          }else {
            this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
          }
      },
      hideAllItem(){
        for (let i in this.items){
          this.items[i].isEdit = 0;
        }
        this.itemAttrs.sliderFlag = 0;
      },
      duringGetTypes(index, modelType){
        this.$emit("duringGetTypes", index, modelType)
      }
    },
    components:{
      ElCol,
      paperMinItem},
  }
</script>

