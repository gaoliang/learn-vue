<template>
  <div id="page2">
      <h3>this is page2</h3>
        <el-button type="primary" @click="goback" round>返回上一页</el-button>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
    }
  },
  methods: {
    goback () { // 后退
      this.$router.go(-1)
    }
  }
}
</script>
