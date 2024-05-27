<template>
  <div>
    <el-image :src="url" style="width: 200px; margin-top: 50px;">
    </el-image>
    <div><el-image style="width: 100px; height: 100px" :src="iconUrl"></el-image><h1 style="color: red;margin-left: 5px;">CANCEL!</h1></div>
    <h3>We are very sorry that your payment was not successful.</h3>
    <el-link type="danger" href="http://122.8.184.48:8080/home" style="font-size: 25px;">go home -></el-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: require('@/assets/cancel.png'),
      iconUrl: require('@/assets/cancel-01.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
