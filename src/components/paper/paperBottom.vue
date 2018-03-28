<template>
  <el-row>
    <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
    <el-col :span="12">
      <el-date-picker
        v-model="orderDetail.reciveTime" type="datetime"
        placeholder="时间" size="mini">
      </el-date-picker>
    </el-col>
    <el-col :span="12">
      <el-checkbox v-model="orderDetail.cutFlag" label="剪好" border size="mini"></el-checkbox>
      <el-checkbox v-model="orderDetail.sliceFlag" label="介好" border size="mini"></el-checkbox>
      <el-checkbox v-model="orderDetail.packFlag" label="入袋" border size="mini"></el-checkbox>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 5px"> </el-col>
    <el-col :span="6">
      <b>合计 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.prize}}</span>
    </el-col>
    <el-col :span="6">
      <b>订金 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.preMoney}}</span>
    </el-col>
    <el-col :span="6">
      <b>实欠 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.restMoney}}</span>
    </el-col>
    <el-col :span="6">
      <b>签收人 : </b><span v-if="itemAttrs.hideNumFlag">{{orderDetail.operator}}</span>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 5px"> </el-col>
    <el-col v-if="!itemAttrs.hideNumFlag" :span="6">
      <el-input-number size="mini" v-model="orderDetail.prize"></el-input-number>
    </el-col>
    <el-col v-if="!itemAttrs.hideNumFlag" :span="6">
      <el-input-number size="mini" v-model="orderDetail.preMoney"></el-input-number>
    </el-col>
    <el-col v-if="!itemAttrs.hideNumFlag" :span="6">
      <el-input-number size="mini" v-model="orderDetail.restMoney"></el-input-number>
    </el-col>
    <el-col v-if="!itemAttrs.hideNumFlag" :span="6">
      <el-input
        size="mini"
        v-if="!itemAttrs.hideNumFlag"
        placeholder="签收人"
        prefix-icon="el-icon-edit"
        v-model="orderDetail.operator">
      </el-input>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
    <!--<el-col :span="24">-->
      <!--<b>备注 : </b>-->
      <!--<el-input-->
        <!--size="mini"-->
        <!--v-if="!itemAttrs.hideNumFlag"-->
        <!--placeholder="备注"-->
        <!--prefix-icon="el-icon-edit"-->
        <!--type="textarea"-->
        <!--v-model="memo">-->
      <!--</el-input>-->
      <!--<span v-else>{{memo}}</span>-->
    <!--</el-col>-->
    <!--<el-col :span="24" v-if="createTime">-->
      <!--<b>创建日期 : </b><span>{{createTime}}</span>-->
    <!--</el-col>-->
    <el-col :span="24" class="clearfix" style="height: 4px"></el-col>
    <bottomTip></bottomTip>
  </el-row>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
  .clearfix{
    clear: both;
  }
</style>
<script>
  import bottomTip from '@/components/paper/bottomTip'
  export default {
    name: 'paperBottom',
    data () {
      return {
      }
    },
    props:{
      itemAttrs: {},
      createTime: {},
      orderDetail: {},
    },
    components:{
      bottomTip
    },
  }
</script>

