<template>
   <div class="floating-panel">
    <el-image class="el-img-fhp" :src="url"></el-image>
  </div>
</template>

<script>
export default {
  name: 'FloatingHomePage',
  data () {
    return {
      url: require('@/assets/3.jpg')
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
  .el-img-fhp {
    width: 100%;
    height: 100%
  }
</style>
