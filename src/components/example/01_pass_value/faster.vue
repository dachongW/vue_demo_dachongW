<template>
  <div class="faster">
    <div>
      <childOne :name="datas.one.name" v-if="this.datas.one.name"></childOne>
    </div>
  </div>
</template>
<script>
  import childOne from './child-one.vue'
export default {
  name: 'faster',
  components:{childOne},
  data () {
    return {
      datas:{
        one:  {
          name: "tom",
        },
        two: {
          name: "jack",
          age: 17
        }
      }
    }
  },
  methods: {

  }
}
</script>
<style scoped>

</style>
