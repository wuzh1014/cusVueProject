<template>
    <section id='head' class="head-other">
      <div class="head-back"><i class="icon icon-chevron-left" @click="routerto"></i></div>
      <div class="head-title">{{headTitle}}</div>
      <div class="head-go"><i class="icon icon-chevron-right" @click="routerto"></i></div>
    </section>
</template>

<script>
    export default {
      name:'head',
      data () {
        return {
        }
      },
      props: ['headTitle'],
      methods: {
        routerto(){
          this.$router.go(-1)
        },

      }
    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .head-other{
    position: fixed;
    z-index: 0;
    left: 0;
    top: 0;
    @include wh(100%, 1.093333rem);
    line-height: 1.093333rem;
    display: flex;
    head-base{
      background-color: #66ff99;
      border-radius: 45px;
      @include wh(0.8rem, 0.8rem);
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
      i{
        color:#fff;
        @include center;
        font-size:30px;
        font-weight: bold;
      }
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
      flex: 1;
      height:1.093333rem;
      text-align: center;
      color:#000;
      @include ellipsis(1);
      font-size:35px;
    }
  }
</style>
