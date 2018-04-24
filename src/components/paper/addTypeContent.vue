<template>
  <el-row>
    <el-col :span="8">
      <b>名称 : </b>
    </el-col>
    <el-col :span="24">
      <el-input
        size="mini"
        placeholder="名称"
        prefix-icon="el-icon-edit"
        v-model="addContent.name">
      </el-input>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
    <el-col :span="8">
      <b>价格 : </b>
    </el-col>
    <el-col :span="16">
      <el-input-number size="mini" v-model="addContent.prize"></el-input-number>
    </el-col>
    <el-col :span="24" class="clearfix" style="height: 10px"></el-col>
    <el-col :span="8">
      <b>备注 : </b>
    </el-col>
    <el-col :span="24">
      <el-input
        size="mini"
        placeholder="备注"
        prefix-icon="el-icon-edit"
        v-model="addContent.memo">
      </el-input>
    </el-col>

  </el-row>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
</style>
<script>
  export default {
    name: 'addTypeContent',
    data () {
      return {
      }
    },
    props: {
      type: {},
      addContent: {},
    },
    methods: {
    },
  }
</script>

