<template>
  <div class="typeList">
    <el-container class="box">
      <headTop :headTitle="titleName"></headTop>
      <el-main>
        <el-row>
          <el-col :span="5" v-for="(menu, index) in menuList" :key="index" :offset="index>0?1:0">
            <el-card :body-style="{ padding: '0px' }">
              <div :class="menu.color" @click="toLink(menu.index)">
                <label>{{menu.name}}</label>
              </div>
              <div style="padding: 14px;">
                <span>{{menu.fullname}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <transition name="router-slide" >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import headTop from '@/components/paper/head'
import {doDataPost} from '@/service/getData'

export default {
  name: 'typeList',
  data () {
    return {
      titleName: '配件类型',
      menuList: [
        {
          name: '导轨类型',
          color: 'rred',
          fullname: '导轨类型',
          index: 0
        },
        {
          name: '导轨配件',
          color: 'ggreen',
          fullname: '导轨配件',
          index: 1
        },
        {
          name: '帘头类型',
          color: 'bblue',
          fullname: '帘头类型',
          index: 2
        },
        {
          name: '帘头配件',
          color: 'bblue',
          fullname: '帘头配件',
          index: 3
        },
        {
          name: '安装类型',
          color: 'ggreen',
          fullname: '安装类型',
          index: 4
        },
        {
          name: '布料类型',
          color: 'bblue',
          fullname: '布料类型',
          index: 5
        },
        {
          name: '布料配件',
          color: 'bblue',
          fullname: '布料配件',
          index: 6
        },
        {
          name: '纱布类型',
          color: 'ggreen',
          fullname: '纱布类型',
          index: 7
        },
        {
          name: '纱布配件',
          color: 'bblue',
          fullname: '纱布配件',
          index: 8
        },
        {
          name: '其他配件',
          color: 'bblue',
          fullname: '其他配件',
          index: 9
        },
        {
          name: '拉帘类型',
          color: 'ggreen',
          fullname: '拉帘类型',
          index: 10
        },
        {
          name: '导轨型号',
          color: 'bblue',
          fullname: '导轨型号',
          index: 11
        }
      ],
    }
  },
  created(){
    this.init();
  },
  mounted(){
  },
  methods: {
    async init() {
    },
    toLink(index){
      this.$router.push({path: '/typeList/detailList', query:{type: 0}});
    },
  },
  watch: {

  },
  directives: {},
  components:{headTop}
}
</script>

<style scoped lang="scss">
@import '../../style/mixin';
.typeList{
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
    padding-top: 50px;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

colorBase{
  width: 100%;
  display: block;
  text-align: center;
  line-height: 15vw;
  label{
    font-size: 38px;
    color: white;
  }
  left: 10px;
}
.rred{
  @extend colorBase;
  background-color: #FFA4A4;
}
.ggreen{
  @extend colorBase;
  background-color: #89E7B3;
}
.bblue{
  @extend colorBase;
  background-color: #B0C8F4;
}
</style>
