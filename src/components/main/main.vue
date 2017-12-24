<template>
  <div class="home">
    <el-carousel
      indicator-position="outside"
      :interval="10000"
      type="card">
      <el-carousel-item :class="item.class" v-for="(item, index) in picList" :key="index">
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="6" v-for="(menu, index) in menuList" :key="index" :offset="index>0?2:1">
        <el-card :body-style="{ padding: '0px' }">
          <div :class="menu.color" @click="toLink(index)">
            <label>{{menu.name}}</label>
          </div>
          <div style="padding: 14px;">
            <span>{{menu.fullname}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <transition :name="transitionName" >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
//import loading from '@/components/commen/loading'
import infiniteScroll from 'vue-infinite-scroll'
import {dealurl, showBack, animate} from '@/config/mUtils'
export default {
  name: 'main',
  data () {
    return {
      picList: [
        {
          class: "item1"
        },
        {
          class: "item2"
        },
        {
          class: "item3"
        },
      ],
      menuList: [
        {
          name: '开单',
          color: 'rred',
          fullname: '创建订单'
        },
        {
          name: '订单',
          color: 'ggreen',
          fullname: '订单列表'
        },
        {
          name: '配件',
          color: 'bblue',
          fullname: '配件管理'
        },
//        {
//          name: '设置',
//          fullname: '设置'
//        },
      ],
      currentDate: new Date(),
      busy: true,
      showBackStatus:false,
      transitionName:'router-slide'
    }
  },
  created(){
    this.init();
  },
  mounted(){
    showBack(status => {
      this.showBackStatus = status;
    })
  },
  methods: {
    async init() {
    },
    toLink(index){
      switch (index){
        case 0:
          this.$router.push({path: '/main/paper', query:{hideNumFlag: 0}});
          break;
        case 1:
          this.$router.push('/billList');
          break;
        case 2:
          this.$router.push('/typeList')
          break;
        case 3:break;
      }


    },
    backTop(){
      animate(document.body, {scrollTop: '0'}, 400,'ease-out');
    },
  },
  watch: {
    '$route' (to, from) {
//      to.path 'router-slide' right
      this.transitionName = 'router-slide';
    }
  },
  directives: {infiniteScroll},
  components:{}
}
</script>

<style scoped lang="scss">
@import '../../style/mixin';
.home{
  width: 100%;
}
.item1{
  background:url('../../assets/img/1.jpg')no-repeat;
  background-size:100%;
}
.item2{
  background:url('../../assets/img/2.jpg')no-repeat;
  background-size:100%;
}
.item3{
  background:url('../../assets/img/3.jpg')no-repeat;
  background-size:100%;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

colorBase{
  width: 100%;
  display: block;
  text-align: center;
  line-height: 15vw;
  label{
    font-size: 38px;
    color: white;
  }
  left: 10px;
}
.rred{
  @extend colorBase;
  background-color: #FFA4A4;
}
.ggreen{
  @extend colorBase;
  background-color: #89E7B3;
}
.bblue{
  @extend colorBase;
  background-color: #B0C8F4;
}
</style>
