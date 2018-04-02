<template>
  <!--v-for="(item, index) in items"  :key="index" -->
  <el-col :span="spanSize" class="item-box">
    <div slot="header" class="clearfix">
      <!--<span>第{{index + 1}}</span>-->
      <el-button v-if="!itemAttrs.hideNumFlag" @click="removeItem(index)"
                 style="float: right; padding: 3px 0" type="text" >删除</el-button>
    </div>

    <el-row>
      <el-col :span="24" v-if="!itemAttrs.hideNumFlag">
        <el-col :span="7">
          <el-button @click="duringGetTypes(index, 0)"
                     size="mini" type="success" plain>轨道</el-button>
        </el-col>
        <el-col class="selectLabel" :span="12" v-if="item.typeNames[0].length > 0">
          <span v-for="iname in item.typeNames[0]">{{iname}},</span>
        </el-col>
        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
        <el-col :span="6">
          <input class="cusInput" type="text" :title="item.upLong" v-model="item.upLong">
        </el-col>
        <el-col :span="6" class="midLabel">
          <span>米 X </span>
        </el-col>
        <el-col :span="6">
          <input class="cusInput" type="text" :title="item.upTime" v-model="item.upTime">
        </el-col>
        <el-col :span="6" class="midLabel">
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
        <el-col class="showLabel" :span="11" v-if="item.typeNames[0].length > 0">
          <span v-for="iname in item.typeNames[0]">{{iname}},</span>
        </el-col>
      </el-col>


      <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

      <el-col :span="7">
        <el-button v-if="!itemAttrs.hideNumFlag" @click="duringGetTypes(index, 1)"
                   size="mini" type="success" plain>天花</el-button>
        <b v-else>天花 : </b>
      </el-col>
      <el-col class="selectLabel" :span="12" v-if="item.typeNames[1].length > 0">
        <span v-for="iname in item.typeNames[1]">{{iname}},</span>
      </el-col>
      <el-col :span="24" class="clearfix" style="height: 5px"></el-col>

      <el-col :span="5" v-if="!itemAttrs.hideNumFlag">
        <el-col :span="24">
          <input class="cusInput" type="text" :title="item.flag" v-model="item.flag">
        </el-col>
        <el-col :span="24" class="midLabel"><span>幅</span></el-col>
        <el-col :span="24">
          <input class="cusInput" type="text" :title="item.count" v-model="item.count">
        </el-col>
        <el-col :span="24" class="midLabel"><span>个</span></el-col>
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
        <el-col :span="24" class="topSet" v-if="item.needHead" >
          <el-col :key="i" v-for="i in 6" :span="4">
            <div class="topSetItem" @click="item.needHead=!item.needHead"></div>
          </el-col>
        </el-col>
        <el-col v-else :span="24">
          <div class="clearfix" style="height: 22px" @click="item.needHead=!item.needHead"></div>
        </el-col>

        <el-col :span="24" v-if="!itemAttrs.hideNumFlag">
          <el-col :span="9">
            <el-button @click="duringGetTypes(index, 2)" size="mini" type="success" plain>布</el-button>
          </el-col>
          <el-col class="selectLabel" :span="12" v-if="item.typeNames[2].length > 0">
            <span v-for="iname in item.typeNames[2]">{{iname}},</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
          <el-col :span="9">
            <input class="cusInput" type="text" :title="item.inLong" v-model="item.inLong">
          </el-col>
          <el-col :span="6" class="midLabel"><span>米 x</span></el-col>
          <el-col :span="9">
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
          <el-col class="selectLabel" :span="11" v-if="item.typeNames[2].length > 0">
            <span v-for="iname in item.typeNames[2]">{{iname}},</span>
          </el-col>
        </el-col>


        <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
        <el-col :span="24" v-if="!itemAttrs.hideNumFlag">
          <el-col :span="9">
            <el-button @click="duringGetTypes(index, 3)" size="mini" type="success" plain>纱</el-button>
          </el-col>
          <el-col class="selectLabel" :span="12" v-if="item.typeNames[3].length > 0">
            <span v-for="iname in item.typeNames[3]">{{iname}},</span>
          </el-col>
          <el-col :span="24" class="clearfix" style="height: 5px"></el-col>
          <el-col :span="9">
            <input class="cusInput" type="text" :title="item.bottomLong" v-model="item.bottomLong">
          </el-col>
          <el-col :span="6" class="midLabel"><span>米 x</span></el-col>
          <el-col :span="9">
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
          <el-col class="selectLabel" :span="11" v-if="item.typeNames[3].length > 0">
            <span v-for="iname in item.typeNames[3]">{{iname}},</span>
          </el-col>
        </el-col>
      </el-col>

      <el-col :span="5" v-if="!itemAttrs.hideNumFlag">
        <el-col :span="24" class="midLabel"><span>高</span></el-col>
        <el-col :span="24">
          <input class="cusInput" type="text" :title="item.allLong" v-model="item.allLong">
        </el-col>
        <el-col :span="24" class="midLabel"><span>米</span></el-col>
      </el-col>

      <el-col :span="5" v-else>
        <el-col :span="12"><span>高</span>
          <span>{{item.allLong}}</span>
          <span>米</span>
        </el-col>
      </el-col>

      <el-col :span="24" class="clearfix" style="height: 15px"></el-col>
    </el-row>
  </el-col>
    <!--<el-card v-if="!itemAttrs.hideNumFlag" class="box-card addFrame">-->
      <!--<i class="el-icon-plus" @click="createItem()"></i>-->
    <!--</el-card>-->

</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
  .el-card{
    width: auto;
    height: auto;
    display: inline-block;
  }
  .midLabel{
    text-align: center;
    font-size: 18px;
    line-height: 22px;
  }
  .cusInput{
    border: 1px solid #ff9292;
    width: 87%;
    border-radius: 3px;
    font-size: 18px;
    line-height: 22px;
    padding-left: 5px;
  }
  .selectLabel{
    font-size: 12px;
    line-height: 14px;
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
    text-align: center;
    i{
      cursor: pointer;
      font-size: 80px;
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
      index:{},
      itemAttrs:{},
      spanSize:{},
    },
    methods: {
      createItem(){
        this.$emit("createItem")
      },
      removeItem(index){
        this.$emit("removeItem", index)
      },
      duringGetTypes(index, modelType){
        this.$emit("duringGetTypes", index, modelType)
      }
    },
    components:{},
  }
</script>

