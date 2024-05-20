<template>
  <div>
    <Title :activeIndex=activeIndex></Title>
    <div style="width: 70%; margin-left: 15%;">
      <h1>Your Cart</h1>
      <el-row>
        <el-col :span="13"><h2 style="float:left">Item</h2></el-col>
        <el-col :span="4"><h2 style="float:left">Price</h2></el-col>
        <el-col :span="5"><h2 style="float:left">Quantity</h2></el-col>
        <el-col :span="2"><h2 style="float:right">Total</h2></el-col>
      </el-row>
      <el-divider class="custom-divider" style="width: 70%;"></el-divider>
      <el-row>
        <el-col :span="13">
          <el-row>
            <el-col :span="4">
              <el-image style="width: 80px; height: 80px" :src="require('@/assets/1.jpg')">
              </el-image>
            </el-col>
            <el-col :span="20"><div style="float:left; margin-top: 4%;">Silk·épil 9 Flex Epilator, Beauty Set with FaceSpa, SES 9300</div></el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <div style="float:left; margin-top: 10%;">$194.99</div>
        </el-col>
        <el-col :span="5">
          <div style="float:left; margin-top: 5%;">
            <el-input-number v-model="num" :min="1" :max="20" label="Quantity:"></el-input-number>
          </div>
        </el-col>
        <el-col :span="2">
          <div style="float:right; margin-top: 20%;">$389.98</div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14"><div><img></div></el-col>
        <el-col :span="10">
          <div>
            <span style="float:left">Subtotal:</span>
            <span style="float:right">$389.98</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14"><div><img></div></el-col>
        <el-col :span="10">
          <el-divider></el-divider>
          <div>
            <span style="float:left">Shipping:</span>
            <span style="float:right">$0.00</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14"><div><img></div></el-col>
        <el-col :span="10">
          <el-divider></el-divider>
          <div>
            <span style="float:left">Tax:</span>
            <span style="float:right">$37.05</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14"><div><img></div></el-col>
        <el-col :span="10">
          <el-divider></el-divider>
          <div>
            <span style="float:left">Coupon Code:</span>
            <span style="float:right">Add Coupon</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14"><div><img></div></el-col>
        <el-col :span="10">
          <el-divider></el-divider>
          <div>
            <span style="float:left">Grand total:</span>
            <span style="float:right">$427.03</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="19">
          <div style="float:right; margin-top: 2%;">
            Don’t have an account? Create an Account.
          </div>
        </el-col>
        <el-col :span="5">
          <div style="float:left; margin-left: 25%;">
            <el-button type="info" @click="checkOut()" class="custom-button" plain>SHOP NOW</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div><Footer></Footer></div>
  </div>
</template>

<script>
import Title from './Title.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Title,
    Footer
  },
  name: 'ShopCart',
  data () {
    return {
      activeIndex: '0',
      num: 1
    }
  },
  methods: {
    checkOut () {
      this.$router.push({name: 'checkOut'})
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-button {
  height: 50px;
  margin-top:0%;
  border-radius: 40px;
  width:180%;
  font-size:15px;
  font-weight:bold
}
</style>
