<template>
  <div class="hello">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" id="name" class="">
      <div class="alert-info"><span></span></div>
    </div>
    <br>
    <br>
    <div>
      <span>年龄:</span>
      <input type="text" v-model="age" id="age" class="">
      <div class="alert-info"><span></span></div>
    </div>
    <br>
    <br>
    <input type="button" @click="submitname()" value="提交">
  </div>
</template>
<script>
  import {validateUtils,validateItems} from './js/validate.js'

  export default {
  name: 'hello',
  data () {
    return {
      name: "",
      age: ""
    }
  },
  methods: {
    submitname(){
      let name= validateItems("name","isNotEmpty,isLength,isOnlyNumLetter",
        validateUtils,this.name,1,20,"这里的名字");
      let age= validateItems("age","isNotEmpty,isLength,isOnlyNumLetter", validateUtils,this.age,1,3,"年龄");
      if(name||age){
        return;
      }else{
        alert("提交成功")
      }
    }
  }
}
</script>
<style scoped>
  .alert-info{
    color: #f0714d;
    position: relative;
  height:1px
  span{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 24px;
    line-height: 24px;
    text-align: right;
  }
  }
</style>