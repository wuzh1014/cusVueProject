<template>
  <div class="typeList">
    <el-container class="box">
      <headTop :headTitle="titleName"></headTop>
      <el-main>
        <el-row>
          <el-col :span="5" v-for="(menu, index) in menuList" :key="index" :offset="index>0?1:0">
            <el-card :body-style="{ padding: '0px' }">
              <div :class="menu.color" @click="toLink(index)">
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
          name: '轨道',
          color: 'rred',
          fullname: '轨道配件'
        },
        {
          name: '天花',
          color: 'ggreen',
          fullname: '天花配件'
        },
        {
          name: '布料',
          color: 'bblue',
          fullname: '布料配件'
        },
        {
          name: '纱',
          color: 'bblue',
          fullname: '纱配件'
        },
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
      switch (index){
        case 0:
          this.$router.push({path: '/typeList/detailList', query:{type: 0}});
          break;
        case 1:
          this.$router.push({path: '/typeList/detailList', query:{type: 1}});
          break;
        case 2:
          this.$router.push({path: '/typeList/detailList', query:{type: 2}});
          break;
        case 3:
          this.$router.push({path: '/typeList/detailList', query:{type: 3}});
          break;
      }
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
