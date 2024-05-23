<template>
  <div>
    <el-image :src="url" style="width: 30%; height: 30%;">
    </el-image>
    <div><el-image style="width: 100px; height: 100px" :src="iconUrl"></el-image><h1 style="color: red;margin-left: 23px;">SUCCESS！</h1></div>
    <h3>Your package will be sent out within 3 days, please pay attention to your mailbox, we will send you the logistics information by email.</h3>
    <el-link type="danger" href="http://localhost:8080/home" style="font-size: 25px;">go home -></el-link>
  </div>
</template>

<script>
export default {
  name: 'paySuccess',
  data () {
    return {
      url: require('@/assets/success.png'),
      iconUrl: require('@/assets/success-01.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
