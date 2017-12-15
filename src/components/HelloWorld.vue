<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>here are some pages</h2>
    <ul>
      <li><router-link to="page1/this is a message from another vue instance">page1</router-link></li>
      <li><router-link to="page2">page2</router-link></li>
      <li><router-link to="layout-test">element layout test </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
