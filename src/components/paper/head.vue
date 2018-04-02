<template>
  <el-header>
    <el-row class="head-other" @click="showTitle">
      <div class="head-back">
        <el-button type="primary" round @click="routerto">返回</el-button>
      </div>
      <div class="head-title" @click="showTitle">{{headTitle}}</div>
      <div class="head-go">
        <el-button v-if="hideNumFlag==0" type="success" round @click="comfirmPage">保存</el-button>
        <el-button v-if="hideNumFlag==1" type="danger" round @click="printPaper">打印</el-button>
        <el-button v-if="hideNumFlag==1" type="info" round @click="comfirmPage">编辑</el-button>
        <el-button v-if="hideNumFlag==1" type="success" round @click="toList">订单列表</el-button>
        <el-button v-if="addTypeFlag==1" type="info" round @click="comfirmPage">新增</el-button>
      </div>
    </el-row>
  </el-header>
</template>

<script>
    export default {
      name:'head',
      data () {
        return {
        }
      },
      props: [
        'headTitle',
        'hideNumFlag',
        'addTypeFlag'],
      methods: {
        routerto(e){
//          this.$router.go(-1)
          this.$router.push('/main');
        },
        comfirmPage(e){
          this.$emit('comfirmPage')
        },
        printPaper(e){
          this.$emit('printPaper')
        },
        showTitle(e){
          if(!this.hideNumFlag){
            this.$emit('showTitle')
          }
        },

        toList(){
          this.$router.push('/billList');
        },
      }
    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .head-other{
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 1.093333rem;
    background-color: #ECF5FD;
    text-align: center;

    el-button{
      font-size: 15px;
    }
    head-base{
      position: fixed;
      top: 10px;
      display: inline-block;
      line-height: 0.5rem;
    }
    .head-back{
      @extend head-base;
      left: 10px;
    }
    .head-go{
      @extend head-base;
      right: 10px;
    }
    .head-title{
      min-height: 28px;
      min-width: 400px;
      line-height: 28px;
      display: inline-block;
      color:#000;
      font-size: 30px;
      cursor: pointer;
    }
  }
</style>
