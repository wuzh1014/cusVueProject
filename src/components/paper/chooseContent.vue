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
        var typesArray = [];
        var namesArray = [];
        var prizeArray = [];
        for (let i in this.itemTypes){
          if (this.itemTypes[i].checked){
            typesArray.push(this.itemTypes[i].uid);
            namesArray.push(this.itemTypes[i].name);
            prizeArray.push(this.itemTypes[i].prize);
          }
        }
        this.items[this.curIndex].selectTypesArray[this.modelType] = typesArray;
        this.items[this.curIndex].typeNames[this.modelType] = namesArray;
        this.items[this.curIndex].typePrizes[this.modelType] = prizeArray;
      },
    },
  }
</script>

