<template>
  <div class="home">
    <img alt="PkuWenWen logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to PkuWenWen"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
