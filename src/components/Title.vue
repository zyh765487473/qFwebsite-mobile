<template>
  <div>
    <div style="width: 100%; height: 30%;" class="demo-image">
      <el-image
          style="width: 15%; height: 100%"
          :src="require('@/assets/logo.jpg')"></el-image>
    </div>
    <el-menu style="padding-left:30%;" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item style="font-size:20px" @click="gotohome()" index="1">Home</el-menu-item>
      <el-menu-item style="font-size:20px" index="2">About Luminique</el-menu-item>
      <el-submenu index="3">
        <div style="font-size:20px" slot="title">Star Products</div>
        <el-menu-item style="font-size:20px" @click="buy()" index="2-1">Luminique 1.0</el-menu-item>
      </el-submenu>
      <el-menu-item style="font-size:20px" @click="buy()" index="4">Shop New</el-menu-item>
      <el-menu-item style="font-size:20px" index="5">Service Center</el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
  components: {
  },
  name: 'Title',
  data () {
    return {
      logo: true
    }
  },
  methods: {
    gotohome () {
      this.$router.push('./Home')
    },
    buy () {
      this.$router.push({name: 'buy'})
    }
  },
  props: ['activeIndex']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
