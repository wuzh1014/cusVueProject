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
          let itemMap = {};
          let prizeMap = {};

          let allPrize = 0;
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
            let eachFlag = parseInt(this.items[i].flag);

            if (this.items[i].typeNames[0].length > 0){
              let formatName = this.items[i].typeNames[0][0] + this.items[i].upLong + '米';
              let cal = parseInt(this.items[i].upTime) * eachFlag;
              if (itemMap[formatName]){
                itemMap[formatName] += cal;
              }else {
                itemMap[formatName] = cal;
              }
              let prize = Number(this.items[i].typePrizes[0][0]) * cal;
              if (prizeMap[formatName]){
                prizeMap[formatName] += prize;
              }else {
                prizeMap[formatName] = prize;
              }
              allPrize += prize;
            }

            if (this.items[i].typeNames[2].length > 0){
              let formatName = this.items[i].typeNames[2][0] + '(米)';
              let cal = parseFloat(this.items[i].listLong) * eachFlag;
              if (itemMap[formatName]){
                itemMap[formatName] += cal;
              }else {
                itemMap[formatName] = cal;
              }
              let prize = Number(this.items[i].typePrizes[2][0]) * cal;
              if (prizeMap[formatName]){
                prizeMap[formatName] += prize;
              }else {
                prizeMap[formatName] = prize;
              }
              allPrize += prize;
            }

            if (this.items[i].typeNames[5].length > 0){
              let formatName = this.items[i].typeNames[5][0] + this.items[i].inLong + '米';
              let cal = parseInt(this.items[i].inTime) * eachFlag;
              if (itemMap[formatName]){
                itemMap[formatName] += cal;
              }else {
                itemMap[formatName] = cal;
              }
              let prize = Number(this.items[i].typePrizes[5][0]) * cal;
              if (prizeMap[formatName]){
                prizeMap[formatName] += prize;
              }else {
                prizeMap[formatName] = prize;
              }
              allPrize += prize;
            }

            if (this.items[i].typeNames[7].length > 0){
              let formatName = this.items[i].typeNames[7][0] + this.items[i].bottomLong + '米';
              let cal = parseInt(this.items[i].bottomTime) * eachFlag;
              if (itemMap[formatName]){
                itemMap[formatName] += cal;
              }else {
                itemMap[formatName] = cal;
              }
              let prize = Number(this.items[i].typePrizes[7][0]) * cal;
              if (prizeMap[formatName]){
                prizeMap[formatName] += prize;
              }else {
                prizeMap[formatName] = prize;
              }
              allPrize += prize;
            }


            if (this.items[i].typeNames[10].length > 0){
              let formatName = this.items[i].typeNames[10][0] + '(平方米)';
              let cal = parseFloat(this.items[i].rollLong) * eachFlag;
              if (itemMap[formatName]){
                itemMap[formatName] += cal;
              }else {
                itemMap[formatName] = cal;
              }
              let prize = Number(this.items[i].typePrizes[10][0]) * cal;
              if (prizeMap[formatName]){
                prizeMap[formatName] += prize;
              }else {
                prizeMap[formatName] = prize;
              }
              allPrize += prize;
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

          }
          this.countAttrs.splice(0, this.countAttrs.length);
          for (let item in itemMap){
              this.countAttrs.push(item + ' : ' + itemMap[item] + '\v\v共￥' + prizeMap[item]);
          }

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

