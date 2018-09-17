<template>
  <div class="marginStyle">
    <h2>登录界面</h2>
    <el-form ref="login"
             :model="model"
             label-width="100px">
      <el-form-item label="账号">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"
                  v-model="model.pwd"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-top:30px;">
      <el-button @click="backLogin">取消</el-button>
      <el-button type="primary"
                 @click="doLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    backLogin () {
      this.$router.push('/')
    },
    doLogin () {
      this.$http('/login', this.model).then(res => {
        console.log(res)
        alert(res.data.msg)
        if (res.data.status === 0) {
          this.$router.push('/')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .marginStyle {
    padding: 200px;
    margin: auto 50px;
    text-align: center;
  }
</style>
