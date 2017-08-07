<template>
  <div class="header" id="headerComponent">
    <router-link :to="{name:'home'}" class="logo">
      <img src="../../../static/image/common/dahai.png" alt="logo" title="主页">
    </router-link>
    <a href="javascript:;" class="menu-icon" v-on:click="menuToggle" title="菜单"></a>
  </div>
</template>

<script>
  import Router from 'vue-router';
  export default {
    name: 'header',
    components: {
    },
    data() {
      return {
      }
    },
    methods: {
      menuToggle: function () {
      //  GlobalVue.$emit('menuToggle');
        console.log(111)
      },
    }
  }

</script>

<style scoped>
  .header {
    height: 48px;
    background-color: #3C3F41;
    border-bottom: 1px solid #242527;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 3;
  }

  .logo>img {
    display: inline-block;
    width: 48px;
    height: 47px;
    padding: 9px;
    vertical-align: top;
  }

  .menu-icon {
    display: inline-block;
    width: 62px;
    height: 47px;
    padding: 15px 20px 14px;
    margin-left: 2px;
    vertical-align: top;
    background: url('/static/image/common/nav_menu.png') center no-repeat;
    &:hover {
      background-image: url('/static/image/common/nav_menu_hover.png');
    }
  }
</style>
