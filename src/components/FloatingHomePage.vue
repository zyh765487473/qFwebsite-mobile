<template>
   <div class="floating-panel">
    <el-image style="width: 100%; height: 100%" :src="url1"></el-image>
  </div>
</template>

<script>
export default {
  name: 'FloatingHomePage',
  data () {
    return {
      url1: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  }
}
</script>

<style scoped>
  .floating-panel {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    background-color: #fff;
    padding: 0px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
  }
</style>
