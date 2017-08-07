<template>
  <div class="hello">
    <div>欢迎来到大虫的空间</div>
    <input type="button" @click="routerToHome" value="跳转到home">
    <br>
    <router-link :to="{name:'home'}"><span>跳转到home</span></router-link>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  methods: {
    routerToHome () {
      this.$router.push({name: 'home',});
    }
  }
}
</script>
<style scoped>

</style>
