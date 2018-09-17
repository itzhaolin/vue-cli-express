<template>
  <div>
    <h1>首页</h1>
    <el-button type="promary"
               @click="login">登录</el-button>
    <el-button type="danger"
               @click="register">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods: {
    login () {
      console.log('login')
      this.$router.push('/login')
    },
    register () {
      console.log('register')
      this.$router.push('/register')
    }
  }
}
</script>
<style>
  body {
    background-color: tomato;
  }
</style>
