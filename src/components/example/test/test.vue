<template>
  <div class="test">
    <input type="button" v-model="aaa">
    <select class="" v-model="changeselect" ref="dictida" @change="showType()" >
      <option disabled>请选择</option>
      <option value="aaa" >aaa</option>
      <option value="bbb" >bbb</option>
      <option value="ccc" >ccc</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      aaa: "",
      changeselect: ""
    }
  },
  mounted(){
    this.aaafun()
  },
  methods: {
    aaafun(){
      this.aaa = 123
      this.changeselect = "bbb"
    }
  }
}
</script>
<style scoped>

</style>