<template>
  <div>
    <el-checkbox
      size="mini"
      border
      :label="item.name"
      :key="index"
      v-model="item.checked"
      @change="changeChecked(index)"
      v-for="(item, index) in itemTypes">
      {{item.name}}<span v-if="item.prize">({{item.prize}})</span>
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
      return {
        selectTypesArray: this.initArray([], 12),
        titleName:'',
        chooseContent:'',
      }
    },
    props: {
      modelType: {
        type: Number
      },
      itemTypes: {},
      typeList: {},
      items: {},
      curIndex: {},
    },
    methods: {
      initArray(array, time){
        for (let i = 0; i < time; i++){
          array.push([]);
        }
        return array;
      },
      changeChecked(index) {
        if (!this.items[this.curIndex].selectTypesArray){
          this.items[this.curIndex].selectTypesArray = JSON.parse(JSON.stringify(this.selectTypesArray));
        }

        this.items[this.curIndex].selectTypesArray[this.modelType].splice(0, this.items[this.curIndex].selectTypesArray[this.modelType].length);
        this.items[this.curIndex].typeNames[this.modelType].splice(0, this.items[this.curIndex].typeNames[this.modelType].length);
        this.items[this.curIndex].typePrizes[this.modelType].splice(0, this.items[this.curIndex].typePrizes[this.modelType].length);

        if (this.typeList[this.modelType].single){
          for (let i in this.itemTypes){
              if (parseInt(i) != index){
                this.itemTypes[i].checked = false;
              }
          }
        }

        for (let i in this.itemTypes){
          if (this.itemTypes[i].checked){
            this.items[this.curIndex].selectTypesArray[this.modelType].push(this.itemTypes[i].uid);
            if (this.itemTypes[i].mini){
              this.items[this.curIndex].typeNames[this.modelType].push(this.itemTypes[i].mini);
            }else {
              this.items[this.curIndex].typeNames[this.modelType].push(this.itemTypes[i].name);
            }
            this.items[this.curIndex].typePrizes[this.modelType].push(this.itemTypes[i].prize);
          }
        }

      },
    },
  }
</script>

