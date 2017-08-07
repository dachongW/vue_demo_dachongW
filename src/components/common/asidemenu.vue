<template>
   <div class="aside" id="asideComponent">
    <ul class="menu" id="menu">
      <li>
        <i class="arrow-left">page</i>
      </li>
      <li>
        <i class="arrow-left"></i>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'aside',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
.aside{
  width: 100px;
  background-color: #3C3F41;
  border-right: 1px solid #111619;
  box-shadow: 0 1px 1px #111619;
  position: fixed;
  z-index: 10;
  top: 49px;
  left: 0;
  bottom: 0;
  padding: 0 0 20px 0;
  margin-right: 0px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
}
.menu{
  padding:4px 0;
  position: relative;
}
.menu>li{
  width: 100%;
   margin-bottom: 4px;
 }
.arrow-left{
  display: inline-block;
  width: 100%;
  height: 30px;
  background-color: #2B2B2B;
}
</style>
