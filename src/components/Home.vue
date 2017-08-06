<template>
  <div class="home">
    <span>这里是home</span>
    <router-link :to="{name:'page'}"><span>跳转到page</span></router-link>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
}
</script>
<style scoped>

</style>
