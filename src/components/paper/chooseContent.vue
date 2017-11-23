<template>
  <div style="text-align:center;">
    <p>{{chooseContent}}</p>
    <at-checkbox-group>
      <at-checkbox :label="item.name" :key="item.id"
                   v-model="item.checked" v-for="(item, index) in itemTypes">
        {{item.name}}
      </at-checkbox>
    </at-checkbox-group>
  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
</style>
<script>
  export default {
    name: 'chooseContent',
    data () {
      return {
        titleName:'',
        chooseContent:'',
      }
    },
    props: {
      modelType: {
        type: Number
      },
      itemTypes: {},
    },
    methods: {
      changeGroup(value) {
          console.info(value)
      },
    },
  }
</script>

