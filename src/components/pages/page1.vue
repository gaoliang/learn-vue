<template>
  <div id="page1">
      <h3>this is page1</h3>
      {{$route.params.message}}
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
    }
  }
}
</script>
