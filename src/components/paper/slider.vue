<template>
  <div class="slider">
    <el-row>
      <el-col class="sliderTitle" :span="24">
        <b>设置区</b>
      </el-col>
      <el-col class="btnList" :span="24">
        <el-col class="btnItem" :span="12" v-for="(btn , index) in btnList" :key="index">
          <el-button @click="duringGetTypes(btn.index)" size="mini" type="success" plain>{{btn.name}}</el-button>
        </el-col>
        <el-col :span="24" class="clearfix" style="height: 30px"></el-col>

        <el-col class="btnItem" :span="12">
          <el-button @click="duringGetTypes(5)" size="mini" type="success" plain>布料类型</el-button>
        </el-col>
        <el-col class="btnItem" :span="12">
          <el-button @click="duringGetTypes(6)" size="mini" type="success" plain>配件</el-button>
        </el-col>

        <el-col class="btnItem" :span="12">
          <el-select v-model="items[itemAttrs.sliderIndex].inMulti" placeholder="倍数" size="mini">
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

        <el-col class="btnItem" :span="12">
          <el-button @click="duringGetTypes(7)" size="mini" type="success" plain>纱布类型</el-button>
        </el-col>
        <el-col class="btnItem" :span="12">
          <el-button @click="duringGetTypes(8)" size="mini" type="success" plain>配件</el-button>
        </el-col>

        <el-col class="btnItem" :span="12">
          <el-select v-model="items[itemAttrs.sliderIndex].bottomMulti" placeholder="倍数" size="mini">
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

        <el-col class="btnItem" :span="12">
          <el-button @click="duringGetTypes(9)" size="mini" type="success" plain>其他配件</el-button>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 30px"></el-col>

        <el-col class="btnItem" :span="12">
          <el-checkbox v-model="items[itemAttrs.sliderIndex].waitFlag" label="待定" border size="mini"></el-checkbox>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
        <el-col class="btnItem" :span="12">
          <el-button @click="resetItem()" size="mini" type="success" plain>复位</el-button>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
        <el-col class="btnItem" :span="12">
          <el-button @click="removeItem()" size="mini" type="success" plain>删除单元</el-button>
        </el-col>
      </el-col>
    </el-row>

  </div>
</template>

<script>
    export default {
      name:'slider',
      data () {
        return {
            timeOptions: [
              {
                value: 2,
                label: 2,
              },
              {
                value: 2.3,
                label: 2.3,
              },
              {
                value: 1.8,
                label: 1.8,
              },
              {
                value: 2.5,
                label: 2.5,
              },
            ],
            btnList: [
              {index: 2, name: '帘头类型'},
              {index: 3, name: '帘头配件'},
              {index: 0, name: '导轨类型'},
              {index: 1, name: '导轨配件'},
              {index: 11, name: '导轨型号'},
              {index: 4, name: '安装类型'},
            ]
        }
      },
      props: {
        items: {},
        itemAttrs: {},
      },
      methods: {
        removeItem(){
          this.$emit("removeItem", this.itemAttrs.sliderIndex);
        },
        resetItem(){
          this.$emit("resetItem", this.itemAttrs.sliderIndex);
        },
        duringGetTypes(modelType){
          this.$emit("duringGetTypes", this.itemAttrs.sliderIndex, modelType)
        }
      }
    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .slider{
    height:100%;
    background-color: #95EBFF;
    .sliderTitle{
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .btnList{
      text-align: center;

      .btnItem{
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
</style>
