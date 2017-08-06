<template>
  <div class="pag-over" id="pageComponent">
    <div class="pagin">
      <span>共{{totalSize}}条,</span>
      <span>{{currentpage}}</span>/<span>{{pageLine}}</span>页
      <a class="page-first" href="javascript:void(0);" v-if="pageLine"
         v-on:click="pageClick(1)">首页</a>
      <template>
        <a class="page-left" href="javascript:void(0);" v-if="pageLine>1 && currentpage != 1"
           v-on:click="pagePrevClick(currentpage)">上一页</a>
        <a class="page-left disable" href="javascript:void(0);" v-else>上一页</a>
      </template>
      <a href="javascript:void(0);" v-on:click="pageClick(1)" v-bind:class="currentClass(1)">1</a>
      <span v-if="showLessTail">...</span>
      <a href="javascript:void(0);" v-for="pn in indexs"
         v-bind:class="currentClass(pn)" v-on:click="pageClick(pn)">{{pn}}</a>
      <span v-if="showMoreTail">...</span>
      <a href="javascript:void(0);" v-on:click="pageClick(pageLine)" v-if="pageLine!=1"
         v-bind:class="currentClass(pageLine)">
        {{pageLine}}</a>
      <template>
        <a class="page-right" href="javascript:void(0);"
           v-if="pageLine>1 && currentpage != pageLine"
           v-on:click="pageNextClick(currentpage)">下一页</a>
        <a class="page-right disable" href="javascript:void(0);" v-else>下一页</a>
      </template>
      <a class="page-last" href="javascript:void(0);"
         v-if="pageLine"
         v-on:click="pageClick(pageLine)">尾页</a>
      <div class="page-count">
        <span>每页显示</span>
        <select v-model="limitLine" v-on:change="pageSizeSelected">
          <option>10</option>
          <option>20</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  import Router from 'vue-router'
  export default {
    name: 'paging',
    props: ['pageData','totalSize'],
    data () {
      return {
        showTail: true,
        showLessTail: false,
        showMoreTail: false,
        totalPage:null,
        pageLine:null,
        currentpage:null,
        limitLine:10,
        startLine:null
      }
    },
    computed: {
      indexs: function () {
        //总数
        let totalPage = this.totalSize;
        //起始条数
        let startLine = Number(this.pageData.startLine);
        //每页条数
        let limitLine = Number(this.pageData.limitLine);
        //分页余数
        let pageLine_m = (totalPage%limitLine);
        //总分页
        let pageLine = null;
        if(pageLine_m == 0){
          pageLine = parseInt(totalPage/limitLine);
        }else{
          pageLine = parseInt(totalPage/limitLine)+1;
        }
        //当前页
        let currentpage = parseInt(startLine/limitLine)+1;
        this.pageLine = pageLine;
        this.currentpage = currentpage;
        this.limitLine = limitLine;
        this.totalSize = totalPage;

        var ar = [];
        if (currentpage> 4) {
          ar.push(currentpage - 2);
          ar.push(currentpage - 1);
          this.showLessTail = true;
        } else {
          for (var i = 2; i < currentpage; i++) {
            ar.push(i);
          }
          this.showLessTail = false;
        }
        if (currentpage != pageLine) {
          if (currentpage != 1) {
            ar.push(currentpage);
          }
        }
        if (currentpage < (pageLine - 3)) {
          ar.push(currentpage + 1);
          ar.push(currentpage + 2);
          this.showMoreTail = true;
        } else {
          for (var i = (currentpage + 1); i < pageLine; i++) {
            ar.push(i);
          }
          this.showMoreTail = false
        }
        return ar;
      }
    },
    methods: {
      currentClass: function (pn) {
        var currentPage = this.currentpage;
        return (currentPage == pn) ? 'current' : '';
      },
      pageSizeSelected: function () {
        this.pageClick(1);
      },
      pageClick: function (page) {
        let startLine = this.limitLine*(page-1);
        this.startLine = startLine;
        this.$router.push({path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine})
      },
      pagePrevClick: function (page) {
        page = page - 1;
        let startLine = this.limitLine*(page-1);
        this.startLine = startLine;
        this.$router.push({path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine})
      },
      pageNextClick: function (page) {
        page = page + 1;
        let startLine = this.limitLine*(page-1);
        this.startLine = startLine;
        this.$router.push({path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.pag-over {
    /*margin-top: 25px;*/
    padding-bottom: 25px;
  }

  div.pag-over a {
    border: 1px solid #cad9ea;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    color: #444;
  }

  div.pag-over a:hover {
    background-color: #eceeef;
  }

  div.pag-over .current, div.pag-over .current:hover {
    background-color: #9c9c9c;
    color: #fff;
  }

  div.pag-over .page-left, div.pag-over .page-left:hover,div.pag-over .page-first,div.pag-over .page-last {
    /*background: url("../../static/img/page_left.png") no-repeat center;*/
    width: auto;
    padding: 0 10px;
  }

  div.pag-over .page-right, div.pag-over .page-right:hover {
    /*background: url("../../static/img/page_right.png") no-repeat center;*/
    width: auto;
    padding: 0 10px;
  }

  div.pag-over .page-left.disable, div.pag-over .page-right.disable {
    cursor: not-allowed;
  }

  div.pag-over .page-count {
    float: right;
    margin-left: 40px;
    width: 140px;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
  }

  div.pag-over .page-count select {
    width: 60px;
    height: 30px;
  }
</style>
