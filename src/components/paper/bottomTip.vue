<template>
  <el-col :span="24" class="bottomTip">
    <el-col :span="24" class="clearfix" style="background-color:red;height: 3px"></el-col>
    <el-col :span="24">
      <el-col :span="6">
        <span>收款及加工单位：</span>
      </el-col>
      <el-col :span="12" class="mainTitle">
        <span>阳江市新纺窗布(店)</span>
      </el-col>
      <el-col :span="6" class="detail">
        <el-col :span="24">
          <span>地址：西平路16号之一</span>
        </el-col>
        <el-col :span="24">
          <span>电话：0662-3276648</span>
        </el-col>
      </el-col>
      <el-row>
        <el-col :span="6" :offset="12">
          <span>联系人：黄先生</span>
        </el-col>
        <el-col :span="6">
          <span>2016年1月3日</span>
        </el-col>
      </el-row>
    </el-col>
  </el-col>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
  .bottomTip{
    font-size: 20px;
    color: red;
    .mainTitle{
      font-size: 25px;
      text-align: center;
    }
    .detail{
      font-size: 15px;
    }
  }
</style>
<script>
  export default {
    name: 'bottomTip',
    data () {
      return {
      }
    },
    props: {
    },
    components:{},
  }
</script>

