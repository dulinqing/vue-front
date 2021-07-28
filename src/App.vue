<template>
  <div id="app2">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <el-row>-->
<!--      <el-button>默认按钮</el-button>-->
<!--      <el-button type="primary">主要按钮</el-button>-->
<!--      <el-button type="success">成功按钮</el-button>-->
<!--      <el-button type="info">信息按钮</el-button>-->
<!--      <el-button type="warning">警告按钮</el-button>-->
<!--      <el-button type="danger">危险按钮</el-button>-->
<!--    </el-row>-->

<!--    <el-radio v-model="radio" label="1">备选项</el-radio>-->
<!--    <el-radio v-model="radio" label="2">备选项</el-radio>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

      <Synca></Synca>
<!--      路由链接-->
      <router-link to="/index">访问首页</router-link>
      <router-link to="/login">去登录</router-link>
<!--      路由占位符-->
      <router-view/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/login/Login'
import Synca from "@/components/synctest/Synca";

export default {
  name: 'App',
  components: {
    // HelloWorld
    //   Login
      Synca
  },
  data () {
    return {
      radio: '1'
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
