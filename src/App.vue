<template>
  <div id="app">
    <el-container>
      <el-header height="40px"></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-s-marketing"></i>
              <span slot="title">盘符稳定性</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-s-data"></i>
              <span slot="title">盘符BVT</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-s-marketing"></i>
              <span slot="title">PC客户端稳定性</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-data"></i>
              <span slot="title">PC客户端BVT</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  html,body,#app,.el-container{
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 40px;
  }

  .el-aside {
    background-color: #FFFFFF;
    color: #333;
    text-align: start;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
