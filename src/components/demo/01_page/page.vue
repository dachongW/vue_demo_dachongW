<template>
  <div class="page">
    <span>这是page。。。。。。</span>
    <!--<div class="pageinfo">-->
      <!--<pageComponent :totalSize="this.data.content.totalSize" :pageData="{startLine:startLine,limitLine:limitLine,pageTo:'/task/type'}" v-if="this.data.content.totalSize>0"></pageComponent>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Router from 'vue-router'
  import pageComponent from './paging.vue'
  export default {
    name: 'page',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
