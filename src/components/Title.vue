<template>
  <div>
    <div style="width: 100%; height: 30%;" class="demo-image">
      <el-image
          style="width: 15%; height: 100%"
          :src="require('@/assets/logo.jpg')"></el-image>
    </div>
    <el-menu style="padding-left:37%" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item @click="gotohome()" index="1">首页</el-menu-item>
      <el-menu-item index="2">关于Luminique</el-menu-item>
      <el-submenu index="3">
        <div slot="title">明星产品</div>
        <el-menu-item @click="buy()" index="2-1">Luminique 1.0</el-menu-item>
      </el-submenu>
      <el-menu-item @click="buy()" index="4">立即选购</el-menu-item>
      <el-menu-item index="5">服务中心</el-menu-item>
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
