<template>
  <el-col :span="spanSize" class="item-box">
    <el-col v-if="item.itemMode === 1" :span="24" @click.native="changeEdit()">

      <div>
        <!--<span>第{{index + 1}}</span>-->
        <!--<el-button v-if="item.isEdit" style="float: right; padding: 3px 0" type="text" >删除</el-button>-->
      </div>
      <el-row>

        <el-col :span="24" v-if="item.isEdit">
          <el-col :span="7">
            <b>帘头 : </b>
          </el-col>
          <el-col class="selectLabel" :span="12" v-if="item.typeNames[3].length > 0">
            <span v-for="iname in item.typeNames[3]">{{iname}},</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
          <el-col :span="12" class="midLabel">
            <input class="cusInput" type="text" :title="item.listLong" v-model="item.listLong">
            <span>米</span>
          </el-col>

        </el-col>

        <el-col :span="24" v-else>
          <el-col :span="13">
            <b>帘头 : </b>
            <span>{{item.listLong}}
            米</span>
          </el-col>
          <el-col class="showLabel" :span="11" v-if="item.typeNames[3].length > 0">
            <span v-for="iname in item.typeNames[3]">{{iname}},</span>
          </el-col>
        </el-col>


        <el-col :span="24" v-if="item.isEdit">
          <el-col :span="7">
            <b>轨道 : </b>
          </el-col>
          <el-col class="selectLabel" :span="12" v-if="item.typeNames[1].length > 0">
            <span v-for="iname in item.typeNames[1]">{{iname}},</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
          <el-col :span="24" class="midLabel">
            <input class="cusInput" type="text" :title="item.upLong" v-model="item.upLong">
            <span>米 x </span>
            <input class="cusInput" type="text" :title="item.upTime" v-model="item.upTime">
            <span>条</span>
          </el-col>
        </el-col>

        <el-col :span="24" v-else>
          <el-col :span="13">
            <b>轨道 : </b>
            <span>{{item.upLong}}</span>
            <span>米 x </span>
            <span>{{item.upTime}}</span>
          </el-col>
          <el-col class="showLabel" :span="11" v-if="item.typeNames[1].length > 0">
            <span v-for="iname in item.typeNames[1]">{{iname}},</span>
          </el-col>
        </el-col>


        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
        <el-col :span="7">
          <div class="recBorder">
            <span v-if="item.typeNames[4].length > 0">{{item.typeNames[4][0].substr(0, 1)}}</span>
            <span v-else>...</span>
          </div>
        </el-col>
        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

        <el-col :span="5" v-if="item.isEdit">
          <el-col :span="24" class="midLabel center">
            <input class="cusInput" type="text" :title="item.flag" v-model="item.flag">
          </el-col>
          <el-col :span="24" class="midLabel center"><span>幅</span></el-col>
          <el-col :span="24" class="midLabel center">
            <input class="cusInput" type="text" :title="item.count" v-model="item.count">
          </el-col>
          <el-col :span="24" class="midLabel center"><span>个</span></el-col>
        </el-col>

        <el-col :span="5" v-else>
          <el-col :span="24">
            <span>{{item.flag}}</span>
            <span>幅</span>
          </el-col>
          <el-col :span="24">
            <span>{{item.count}}</span>
            <span>个</span>
          </el-col>
        </el-col>

        <el-col :span="14" class="redCircle">
          <el-col :span="24" class="topSet" v-if="item.needHead" @click.native.stop="item.needHead=!item.needHead">
            <el-col class="topSetItem" :key="i" v-for="i in 6" :span="4"></el-col>
          </el-col>
          <el-col v-else :span="24" @click.native.stop="item.needHead=!item.needHead">
            <div class="clearfix" style="height: 22px"></div>
          </el-col>

          <el-col :span="24" v-if="item.isEdit">
            <el-col :span="9">
              <b>布</b>
            </el-col>
            <el-col class="selectLabel" :span="12" v-if="item.typeNames[6].length > 0">
              <span v-for="iname in item.typeNames[6]">{{iname}},</span>
            </el-col>
            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
            <el-col :span="24" class="midLabel">
              <input class="cusInput" type="text" :title="item.inLong" v-model="item.inLong">
              <span>米 x</span>
              <input class="cusInput" type="text" :title="item.inTime" v-model="item.inTime">
            </el-col>
          </el-col>

          <el-col :span="24" v-else>
            <el-col :span="13">
              <b>布</b>
              <span>{{item.inLong}}</span>
              <span>x</span>
              <span>{{item.inTime}}</span>
              <span>={{item.inMeter}}</span>
            </el-col>
            <el-col class="selectLabel" :span="11" v-if="item.typeNames[6].length > 0">
              <span v-for="iname in item.typeNames[6]">{{iname}},</span>
            </el-col>
          </el-col>


          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
          <el-col :span="24" v-if="item.isEdit">
            <el-col :span="9">
              <b>纱</b>
            </el-col>
            <el-col class="selectLabel" :span="12" v-if="item.typeNames[8].length > 0">
              <span v-for="iname in item.typeNames[8]">{{iname}},</span>
            </el-col>
            <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
            <el-col :span="24" class="midLabel">
              <input class="cusInput" type="text" :title="item.bottomLong" v-model="item.bottomLong">
              <span>米 x</span>
              <input class="cusInput" type="text" :title="item.bottomTime" v-model="item.bottomTime">
            </el-col>
          </el-col>

          <el-col :span="24" v-else>
            <el-col :span="13">
              <b>纱</b>
              <span>{{item.bottomLong}}</span>
              <span>x</span>
              <span>{{item.bottomTime}}</span>
              <span>={{item.bottomMeter}}</span>
            </el-col>
            <el-col class="selectLabel" :span="11" v-if="item.typeNames[8].length > 0">
              <span v-for="iname in item.typeNames[8]">{{iname}},</span>
            </el-col>
          </el-col>
        </el-col>

        <el-col :span="5" v-if="item.isEdit">
          <el-col :span="24" class="midLabel center"><span>高</span></el-col>
          <el-col :span="24" class="midLabel center">
            <input class="cusInput" type="text" :title="item.allLong" v-model="item.allLong">
          </el-col>
          <el-col :span="24" class="midLabel center"><span>米</span></el-col>
        </el-col>

        <el-col :span="5" v-else>
          <span>高</span>
          <span>{{item.allLong}}</span>
          <span>米</span>
        </el-col>

        <el-col :span="24" class="clearfix" style="height: 15px"></el-col>
      </el-row>

    </el-col>




    <el-col v-else class="addFrame">
      <i class="el-icon-plus" @click="createItem()"></i>
    </el-col>
  </el-col>


</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
  .midLabel{
    display: inline;
    span{
      font-size: 18px;
      line-height: 22px;
      display: inline;
    }
  }
  .midLabel.center{
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
  }
  .cusInput{
    max-width: 50px;
    text-align: center;
    display: inline;
    border: 1px solid #ff9292;
    border-radius: 3px;
    font-size: 18px;
    line-height: 22px;
  }
  .selectLabel{
    font-size: 12px;
    line-height: 14px;
  }
  .recBorder{
    border: 1px solid black;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }
  .showLabel{
    font-size: 12px;
    line-height: 13px;
  }
  .item-box{
    font-size: 12px;
    height: auto;
    display: inline-block;
    border-top: 1px solid #b2b2b2;
    box-shadow: none;
    padding-top: 10px;
    .redCircle{
      border: 1px solid #ff9292;
      border-radius: 5px;
      padding: 0 5px 10px 5px;
      .topSet{
        overflow: hidden;
        .topSetItem{
          border-bottom:1px solid #ff9292;
          border-radius: 50%;
          height: 0.3rem;
          top: -0.15rem;
          position: relative;
        }
      }
    }

  }

  .addFrame{
    padding-top: 40px;
    text-align: center;
    i{
      cursor: pointer;
      font-size: 40px;
    }
  }
</style>
<script>
  import {doDataPost} from '@/service/getData'
  export default {
    name: 'paperMinItem',
    data () {
      return {
      }
    },
    props: {
      item:{},
      items:{},
      index:{},
      itemAttrs:{},
      spanSize:{},
    },
    methods: {
      changeEdit(){
        for (let i in this.items){
          if (i == this.index){
            this.items[i].isEdit = 1;
          }else {
            this.items[i].isEdit = 0;
          }
        }
        this.itemAttrs.sliderIndex = this.index;
        this.itemAttrs.sliderFlag = 1;
      },
      createItem(){
        this.$emit("createItem")
      },
      duringGetTypes(index, modelType){
        this.$emit("duringGetTypes", index, modelType)
      }
    },
    components:{},
  }
</script>

