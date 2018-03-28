<template>
  <el-row>
    <el-col :span="6" v-if="contentId">
      <b>订单号 : </b><span>{{contentId}}</span>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
    <el-col :span="6">
      <b>客户 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.name}}</span>
    </el-col>
    <el-col :span="6">
      <b>电话 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.phone}}</span>
    </el-col>
    <el-col :span="6">
      <b>住址 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.address}}</span>
    </el-col>
    <!--<el-col :span="6">-->
      <!--<b>手机 : </b><span v-if="itemAttrs.hideNumFlag">{{mobile}}</span>-->
    <!--</el-col>-->
    <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
    <el-col :span="6">
      <el-input
        size="mini"
        v-if="!itemAttrs.hideNumFlag"
        placeholder="客户"
        prefix-icon="el-icon-edit"
        v-model="orderDetail.name">
      </el-input>
    </el-col>
    <el-col :span="6">
      <el-input
        size="mini"
        v-if="!itemAttrs.hideNumFlag"
        placeholder="电话"
        prefix-icon="el-icon-phone-outline"
        v-model="orderDetail.phone">
      </el-input>
    </el-col>
    <el-col :span="6">
      <el-input
        size="mini"
        v-if="!itemAttrs.hideNumFlag"
        placeholder="住址"
        prefix-icon="el-icon-location-outline"
        v-model="orderDetail.address">
      </el-input>
    </el-col>
    <!--<el-col :span="6">-->
      <!--<el-input-->
        <!--size="mini"-->
        <!--v-if="!itemAttrs.hideNumFlag"-->
        <!--placeholder="手机"-->
        <!--prefix-icon="el-icon-mobile-phone"-->
        <!--v-model="orderDetail.mobile">-->
      <!--</el-input>-->
    <!--</el-col>-->
    <el-col :span="24" class="clearfix" style="height: 15px"></el-col>
  </el-row>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
</style>
<script>
  export default {
    name: 'paperTop',
    data () {
      return {

      }
    },
    created(){
    },
    props:{
      itemAttrs:{},
      contentId:{},
      orderDetail:{},
    },
    components:{
    },
  }
</script>

