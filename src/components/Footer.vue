<template>
  <div style="background-color:#444444; margin-top:3%;">
    <el-row>
      <el-col :span="6" style="margin: 40px 40px 40px 10%;">
        <div style="width: 100%; height: 30%; text-align:left" class="grid-content bg-purple">
          <el-image style="width: 50%; height: 100%;" :src="require('@/assets/logo.jpg')"></el-image>
        </div>
        <h5 style="color: #AAAAAA;  text-align:left">The Most Effective At-Home Facial Hair Remover Backed by Our 90-Day 100% Money-Back Guarantee</h5>
        <h6 style="color: #AAAAAA;  text-align:left">© 2024 Luminique. All rights reserved</h6>
        <div style="width: 100%; height: 30%; text-align:left" class="grid-content bg-purple">
          <el-image style="width: 50%; height: 100%;" :src="require('@/assets/4.png')"></el-image>
        </div>
      </el-col>
      <el-col :span="6" style="margin: 60px 0px 0px -10%;">
        <div class="grid-content bg-purple-light">
          <h4 style="color: #FFFFFF">Policies & Help</h4>
          <h5 style="color: #AAAAAA">Terms of Service</h5>
          <h5 style="color: #AAAAAA">Shipping Policy</h5>
          <h5 style="color: #AAAAAA">Refund Policy</h5>
          <h5 style="color: #AAAAAA">Contact Us</h5>
          <h5 style="color: #AAAAAA">Help Center</h5>
          <h5 style="color: #AAAAAA">Track Order</h5>
        </div>
      </el-col>
      <el-col :span="6" style="margin: 60px 0px 0px -7%;">
        <div class="grid-content bg-purple-light">
          <h4 style="color: #FFFFFF">Main Menu</h4>
          <h5 style="color: #AAAAAA">Home</h5>
          <h5 style="color: #AAAAAA">Benefits</h5>
          <h5 style="color: #AAAAAA">Reviews</h5>
          <h5 style="color: #AAAAAA">FAQ</h5>
          <h5 style="color: #AAAAAA">Order</h5>
          <h5 style="color: #AAAAAA">Need Help?</h5>
        </div>
      </el-col>
      <el-col :span="6" style="margin: 60px 0px 0px -7%;">
        <div class="grid-content bg-purple-light">
          <h4 style="color: #FFFFFF">Policies & Help</h4>
          <h5 style="color: #AAAAAA">Terms of Service</h5>
          <h5 style="color: #AAAAAA">Shipping Policy</h5>
          <h5 style="color: #AAAAAA">Refund Policy</h5>
          <h5 style="color: #AAAAAA">Contact Us</h5>
          <h5 style="color: #AAAAAA">Help Center</h5>
          <h5 style="color: #AAAAAA">Track Order</h5>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Footer',
  data () {
    return {
    }
  },
  methods: {
    gotohome () {
      this.$router.push('./Home')
    },
    buy () {
      this.$router.push({name: 'buy'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
