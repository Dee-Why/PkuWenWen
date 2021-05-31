<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      请参与开发的同学认真阅读<br>
      <a href="https://pkuwenwen.readthedocs.io/zh/latest/view_description/view_description.html" target="_blank" rel="noopener">这个项目的文档</a>
      和
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Vue的文档</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
