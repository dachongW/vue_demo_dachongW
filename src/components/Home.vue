<template>
  <div id="home">
    <span>home</span>
    <headerComponent></headerComponent>
    <div id="main">
      <aSideMenuComponent></aSideMenuComponent>
      <div id="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  import headerComponent from './common/header'
  import aSideMenuComponent from './common/asidemenu'
  export default {
    name: 'home',
    components: { headerComponent,aSideMenuComponent},
  }
</script>
<style scoped>
  #main{
    border-top: 1px solid #111619;
    position: relative;
    z-index: 1;
    padding: 0 0px 20px;
    overflow-x: hidden;
  }
  #container{
    position: relative;
    padding: 0;
    min-width: 900px;
    min-height: 500px;
    margin: 0 auto;
    margin-left: 118px;
    margin-top: 40px;
  }
</style>
