<template>
  <div class="tree">
    <h1>tree........</h1>
    <router-link :to="{name:'test'}"><span>跳转到test</span></router-link>
    <div class="tree">
      <nav class='navbar'>
        <ul class='nav nav-stacked' id="ulaaaa">
          <template v-for='item in menus'>
            <li role='presentation' v-if='!item.children' ><a href="javascript:;">{{item.text}}</a></li>
            <li role='presentation' v-if='item.children' class="aaaaaa"><span><</span><a href="javascript:;" v-on:click='toggleChildren(item)' class="bbbb">{{item.text}}<span class='glyphicon' v-bind:class='{ "glyphicon-chevron-right": !item.expanded, "glyphicon-chevron-down": item.expanded }'></span></a>
              <ul v-show='item.expanded' class="childs">
                <li v-for='child in item.children'><a href="javascript:;">{{child.text}}</a></li>
              </ul>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tree',
  methods: {
    toggleChildren: function(item) {
      item.expanded = !item.expanded;
    },
  },
  data() {
    return {
      menus:[{
        text:'水果',
        expanded:false,
        children:[{
          text:'苹果qqqqqqqqqqq',
        },{
          text:'荔枝'
        },{
          text:'葡萄'
        },{
          text:'火龙果'
        }]
      },{
        text:'好吃的',
        expanded:false,
        children:[{
          text:'糖',
        },{
          text:'面包'
        },{
          text:'火腿'
        },{
          text:'薯片'
        },{
          text:'碎碎面'
        }]
      },{
        text:'饮料',
        expanded:false,
        children:[]
      }]
    }
  }
}
</script>
<style scoped>

</style>