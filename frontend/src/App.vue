<template>
  <div class="login-wrap">
    <div class="head">
      <el-button type="info" round @click="signup">Sign Up</el-button>
      <el-button type="info" round @click="signin">Sign In</el-button>
      <el-button type="info" round @click="about">About</el-button>
      <el-button type="info" round @click="home">Home</el-button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push('/home')
    },
    about () {
      this.$router.push('/about')
    },
    signin () {
      this.$router.push('/signin')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  margin-top: 60px;
}

.login-wrap {
  position: fixed;
  width:100%;
  height: 100%;
  background-size: 100%;
  background-repeat:no-repeat;
  background-attachment: fixed;
  background-image: url(./assets/login_bg.jpg);
}
.head {
  width: 100%;
  height: 70px;
  background-color: #324157;
}
.head button {
  float: right;
  height: 36px;
  margin-left: 10px;
  margin-top: 15px;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 40px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 0%;
  width: 350px;
  margin: 190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
