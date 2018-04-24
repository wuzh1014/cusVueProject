<template>
  <div>
    <el-checkbox
      size="mini"
      border
      :label="item.name"
      :key="index"
      v-model="item.checked"
      @change="changeChecked"
      v-for="(item, index) in itemTypes">
      {{item.name}}({{item.prize}})
    </el-checkbox>
  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
</style>
<script>
  export default {
    name: 'chooseContent',
    data () {
      const selectTypesArray = [
        [],[],[],[]
      ];
      return {
        selectTypesArray: selectTypesArray,
        titleName:'',
        chooseContent:'',
      }
    },
    props: {
      modelType: {
        type: Number
      },
      itemTypes: {},
      items: {},
      curIndex: {},
    },
    methods: {
      changeChecked() {
        if (!this.items[this.curIndex].selectTypesArray){
          this.items[this.curIndex].selectTypesArray =
            JSON.parse(JSON.stringify(this.selectTypesArray));
        }

        this.items[this.curIndex].selectTypesArray[this.modelType].splice(0, this.items[this.curIndex].selectTypesArray[this.modelType].length);
        this.items[this.curIndex].typeNames[this.modelType].splice(0, this.items[this.curIndex].typeNames[this.modelType].length);
        this.items[this.curIndex].typePrizes[this.modelType].splice(0, this.items[this.curIndex].typePrizes[this.modelType].length);

        for (let i in this.itemTypes){
          if (this.itemTypes[i].checked){
            this.items[this.curIndex].selectTypesArray[this.modelType].push(this.itemTypes[i].uid);
            this.items[this.curIndex].typeNames[this.modelType].push(this.itemTypes[i].name);
            this.items[this.curIndex].typePrizes[this.modelType].push(this.itemTypes[i].prize);
          }
        }

      },
    },
  }
</script>

