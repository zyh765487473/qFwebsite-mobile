<template>
  <div>
    <Title :activeIndex=activeIndex></Title>
    <div style="width: 70%; margin-left: 15%;">
      <h1>Your Cart</h1>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div><el-image style="width: 80px; height: 80px; float:left" :src="require('@/assets/1.jpg')"></el-image></div>
        </el-col>
        <el-col :span="10">
          <div style="float:right; margin-top: 4%;">{{title}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div><span style="float:left">Price:</span></div>
        </el-col>
        <el-col :span="10">
          <div>
            <div style="float:right; margin-top: 10%;">$ {{ price }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div><span style="float:left">Quantity:</span></div>
        </el-col>
        <el-col :span="10">
          <div>
            <el-input-number @change="handleChange" v-model="num" :min="1" :max="20"></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div><span style="float:left">Total:</span></div>
        </el-col>
        <el-col :span="10">
          <div>
            <div style="float:right; margin-top: 10%;">$ {{ total }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div>
            <span style="float:left">Subtotal:</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <span style="float:right">$ {{ total }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div>
            <span style="float:left">Shipping:</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <span style="float:right">$0.00</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-divider></el-divider>
        <el-col :span="14">
          <div>
            <span style="float:left">Grand total:</span>
          </div>
        </el-col>
        <el-col :span="10">
          <div>
            <span style="float:right">$ {{total}}</span>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div style="float:left; margin-top: 2%;">
        Don’t have an account? Create an Account.
      </div>
      <div>
        <el-button type="info" @click="checkOut()" class="custom-button" plain>SHOP NOW</el-button>
      </div>
    </div>
    <div><Footer></Footer></div>
  </div>
</template>

<script>
import Title from './Title.vue'
import Footer from './Footer.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    Title,
    Footer,
    Cookies
  },
  name: 'ShopCart',
  data () {
    return {
      activeIndex: '0',
      num: 1,
      title: '',
      price: 0,
      total: 0
    }
  },
  methods: {
    checkOut () {
      this.$router.push({name: 'checkOut', params: {'title': this.title, 'total': this.total, 'num': this.num, 'price': this.price}})
    },
    initInfo () {
      let params = this.$route.params
      let title = ''
      let num = 1
      let price = 0
      let total = 0
      if (params.title === '' || params.title === undefined) {
        title = Cookies.get('title')
        num = Cookies.get('num')
        price = Cookies.get('price')
        total = Cookies.get('total')
        console.log('1111111')
      } else {
        title = params.title // 标题
        num = params.num // 数量
        price = params.price // 单价
        total = (params.price * num).toFixed(2) // 总价
        Cookies.set('title', title)
        Cookies.set('num', num)
        Cookies.set('price', price)
        Cookies.set('total', total)
        console.log('22222222')
      }
      this.title = title // 标题
      this.num = num // 数量
      this.price = price // 单价
      this.total = total // 总价
      window.scrollTo({top: 0, behavior: 'smooth'}) // 回到顶部
    },
    handleChange (value) {
      this.total = (this.price * this.num).toFixed(2)
    }
  },
  mounted () {
    this.initInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-button {
  height: 40px;
  margin-top:5%;
  border-radius: 40px;
  width:90%;
  font-size:15px;
  font-weight:bold
}
</style>
