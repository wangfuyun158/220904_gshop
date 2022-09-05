<template>
  <dev id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </dev>
</template>

<script>
  import  FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {mapActions} from 'vuex'
  import {reqFoodCategorys} from './api'
  export default {
    /*async mounted () {
      // console.log("hahaha")
      // const result = await reqFoodCategorys()
      // console.log("hahaha1")
      // console.log(result)
    },*/
    /*mounted(){
      this.$store.dispatch('getAddress');
    },*/
    mounted(){
      this.getAddress()
    },
    methods:{
      ...mapActions(['getAddress'])
    },
    components:{
      FooterGuide
    },



  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
