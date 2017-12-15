<template>
  <div id="app">
    <img src="./assets/logo.png">
      <transition name="el-fade-in"> // 使用elementUI的动画
    <router-view/>
          </transition>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
