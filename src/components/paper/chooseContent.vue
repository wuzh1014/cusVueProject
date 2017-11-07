<template>
  <div style="text-align:center;">
    <p>{{chooseContent}}</p>
  </div>
</template>
<style scoped lang="scss">
  @import '../../style/mixin';
</style>
<script>
  import {hotcomment} from '@/service/getData'
  export default {
    name: 'chooseContent',
    data () {
      return {
        titleName:'',
        chooseContent:'xxx',
      }
    },
    computed: {
    },
    created(){
    },
    mounted(){
      this.init();
    },
    destroyed(){
    },
    methods: {
      async init() {
      },
    },
    components:{},

  }
</script>

