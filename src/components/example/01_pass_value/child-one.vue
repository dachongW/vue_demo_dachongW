<template>
  <div class="hello">
    <span>姓名：</span>
    <span>{{this.name}}</span>
  </div>
</template>
<script>
export default {
  name: 'hello',
  props:{name},
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