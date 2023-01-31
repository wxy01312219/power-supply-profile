<template>
  <div id="app" :class="style ? 'theme1' : ''">
    <router-view></router-view>
  <!-- <home/> -->
  </div>
</template>

<script>
import bus from '@/utils/bus';
// import home from '@page/home/index'
export default {
  data(){
    return{
      style: false
    }
  },
  components:{
    // home
  },
  created(){
    bus.$on('global_theme', (msg) => {    // 接收子组件传来 global_theme 的值
      this.style = msg;
    });
  }
}
</script>
