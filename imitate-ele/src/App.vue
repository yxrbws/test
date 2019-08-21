<template>
  <div id="app">
    <headerTop></headerTop>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/common/header.vue'
export default {
  data(){
    return {}
  },
  components:{
    headerTop:header
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  #app{
    background-color: #f5f5f5;
  }
</style>
