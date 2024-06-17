<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="demo-image div-title">
          <i class="el-icon-menu" @click="drawer = true" style="margin-left: -20%;"></i>
          <el-image style="margin-left: 15%;" class="img-title" :src="require('@/assets/logo.jpg')"></el-image>
        </div>
      </el-col>
    </el-row>
    <el-drawer :visible.sync="drawer" :direction="direction" size="85%">
      <el-menu :default-active="activeIndex" class="el-menu-demo el-title" mode="horizontal">
        <el-menu-item class="font-size-title" @click="gotohome()" index="1">Home</el-menu-item>
        <el-menu-item class="font-size-title" @click="brand()" index="2">About Luminique</el-menu-item>
        <el-submenu index="3">
          <div class="font-size-title" slot="title">Star Products</div>
          <el-menu-item class="font-size-title" @click="buy()" index="2-1">Luminique 1.0</el-menu-item>
        </el-submenu>
        <el-menu-item class="font-size-title" @click="buy()" index="4">Shop New</el-menu-item>
        <el-menu-item class="font-size-title" index="5">Service Center</el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Title',
  data () {
    return {
      logo: true,
      drawer: false,
      direction: 'ltr'
    }
  },
  methods: {
    gotohome () {
      this.$router.push('./Home')
    },
    buy () {
      this.$router.push({name: 'buy'})
    },
    brand () {
      this.$router.push({name: 'brandDetail'})
    }
  },
  props: ['activeIndex']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-size-title {
  font-size:20px
}
.img-title {
  width: 50%;
  height: 100%
}
.div-title {
  width: 100%;
  height: 50%;
}
.el-title {
  padding-left:30%;
}
</style>
