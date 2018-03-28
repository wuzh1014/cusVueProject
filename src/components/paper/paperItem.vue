<template>
  <el-row>
    <paperMinItem
               :spanSize="6"
               :itemAttrs="itemAttrs"
               :item="item"
               :index="index"
               @createItem="createItem"
               @removeItem="removeItem"
               @duringGetTypes="duringGetTypes"
               v-for="(item, index) in items"
               v-if="index < 4"
               :key="index"
    ></paperMinItem>
    <el-col :span="6">
      <paperMinItem
        :spanSize="24"
        :itemAttrs="itemAttrs"
        :item="item"
        :index="index"
        @createItem="createItem"
        @removeItem="removeItem"
        @duringGetTypes="duringGetTypes"
        v-for="(item, index) in items"
        v-if="index > 3"
        :key="index"
      ></paperMinItem>
    </el-col>
    <el-col :span="18">
      <el-col class="midTitle" :span="24">
        订单统计:
      </el-col>
      <el-col :span="10" :offset="4">
        <el-col class="midList" :span="24">
          共{{countAttrs.allUpLong}}米轨道。
        </el-col>
        <el-col class="midList" :span="24">
          共{{parseInt(countAttrs.allUpTime)}}条轨道。
        </el-col>
        <el-col class="midList" :span="24">
          共{{countAttrs.allInMeter}}米布。
        </el-col>
        <el-col class="midList" :span="24">
          共{{parseInt(countAttrs.allInTime)}}条布。
        </el-col>
        <el-col class="midList" :span="24">
          共{{countAttrs.allBottomMeter}}米纱。
        </el-col>
        <el-col class="midList" :span="24">
          共{{parseInt(countAttrs.allBottomTime)}}条纱。
        </el-col>
        <el-col class="midList" :span="24">
          共{{parseInt(countAttrs.allCount)}}个。
        </el-col>
        <el-col class="midList" :span="24">
          共{{parseInt(countAttrs.allFlag)}}幅。
        </el-col>
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
          let allUpLong = 0;
          let allUpTime = 0;
          let allInMeter = 0;
          let allInTime = 0;
          let allBottomMeter = 0;
          let allBottomTime = 0;
          let allAllLong = 0;
          let allCount = 0;
          let allFlag = 0;
          for (let i in this.items){
            this.items[i].bottomMeter = this.items[i].bottomLong * parseInt(this.items[i].bottomTime);
            this.items[i].inMeter = this.items[i].inLong * parseInt(this.items[i].inTime);

            allUpLong += this.items[i].upLong * parseInt(this.items[i].upTime);
            allUpTime += parseInt(this.items[i].upTime);

            allInMeter += this.items[i].inMeter;
            allInTime += parseInt(this.items[i].inTime);

            allBottomMeter += this.items[i].bottomMeter;
            allBottomTime += parseInt(this.items[i].bottomTime);

            allAllLong += this.items[i].allLong;
            allCount += parseInt(this.items[i].count);
            allFlag += parseInt(this.items[i].flag);
          }
          this.countAttrs.allUpLong = allUpLong;
          this.countAttrs.allUpTime = allUpTime;
          this.countAttrs.allInMeter = allInMeter;
          this.countAttrs.allInTime = allInTime;
          this.countAttrs.allBottomMeter = allBottomMeter;
          this.countAttrs.allBottomTime = allBottomMeter;
          this.countAttrs.allAllLong = allAllLong;
          this.countAttrs.allCount = allCount;
          this.countAttrs.allFlag = allFlag;
        },
        deep:true,
      },
    },
    methods: {
      createItem(){
        this.items.push(JSON.parse(JSON.stringify(this.defaultItem)));
      },
      removeItem(index){
        this.items.splice(index, 1);
      },
      duringGetTypes(index, modelType){
        this.itemAttrs.modelType = modelType;
        switch (modelType){
          case 0:this.itemAttrs.chooseTittle = '轨道配件';break;
          case 1:this.itemAttrs.chooseTittle = '天花板配件';break;
          case 2:this.itemAttrs.chooseTittle = '布料类型';break;
          case 3:this.itemAttrs.chooseTittle = '纱布类型';break;
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
          that.itemTypes = result.data;
        });
      },
    },
    components:{
      ElCol,
      paperMinItem},
  }
</script>

