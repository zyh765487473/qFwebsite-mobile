<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <Title :activeIndex=activeIndex></Title>
    <el-row>
      <el-col :span="12">
        <div style="height:40px"></div>
        <div style="width:80%;">
          <el-carousel style="left:10%;" indicator-position="outside">
            <el-carousel-item style="background-color: rgba(0,0,0,0)" v-for="item in imgList" :key="item.id">
              <img style="object-fit: scale-down; width:100%; height:100%" :src="item.idView">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <!--大标题（品牌型号）-->
          <h1 class="text-left-g">{{logoTitle}}</h1>
          <!--标题-->
          <h2 class="text-left-g">{{title}}</h2>
          <el-row>
            <!--价格-->
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h2 class="text-left-g">${{price}} USD</h2>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-rate class="text-left-g" style="font-size: 30px; font-size: 20px; margin-top: 3%; margin-left: -10%;"
                  v-model="value"
                  disabled
                  text-color="red"
                  show-score
                  :score-template=textvalue>
                </el-rate>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-divider class="custom-divider"></el-divider>
        <div>
          <h4 class="text-left-g" v-for= "item in description" :key="item.id">{{item.value}}</h4>
        </div>
        <el-divider class="custom-divider"></el-divider>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <h2 class="text-left-g">Color: Purple</h2>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <el-input-number v-model="num" :min="1" :max="5" label="Quantity:"></el-input-number>
              </div>
            </el-col>
          </el-row>
          <el-button class="custom-button" type="success" @click="shopCart()" plain>ADD TO CARD</el-button>
          <!--<PaypalBut style="margin-left:0%; width:73%"></PaypalBut>-->
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <div>我是A+模块</div>
    <div><Faq></Faq></div>
    <div><Review></Review></div>
    <div><Footer></Footer></div>
  </div>
</template>

<script>
import Title from './Title.vue'
import Faq from './Faq.vue'
import Review from './Review.vue'
import Footer from './Footer.vue'
import PaypalBut from './PaypalBut.vue'

export default {
  components: {
    Title,
    Faq,
    Review,
    Footer,
    PaypalBut
  },
  name: 'Buy',
  data () {
    return {
      imgList: [
        {id: 0, idView: require('@/assets/1.jpg')},
        {id: 1, idView: require('@/assets/2.jpg')},
        {id: 2, idView: require('@/assets/3.jpg')}
      ],
      activeIndex: '4',
      // 评分
      value: 4.8,
      // rating文字
      textvalue: '4.8 (798)',
      // 数量
      num: 1,
      // 品牌名称标题
      logoTitle: 'Luminique 1.0',
      // 标题
      title: 'women face epilator',
      // 售价
      price: '69.99',
      // 五点描述
      description: [
        {id: 0, value: '■ Long-lasting hair removal from the comfort of home.'},
        {id: 1, value: '■ 93% Hair Reduction in 4 Weeks'},
        {id: 2, value: '■ Sapphire-Ice Cooling and UV filter'},
        {id: 3, value: '■ Sapphire-Ice Cooling and UV filter'},
        {id: 4, value: '■ 93% Hair Reduction in 4 Weeks'}
      ],
      fullscreenLoading: false
    }
  },
  methods: {
    shopCart () {
      let til = this.logoTitle + ' ' + this.title
      this.$router.push({name: 'shopCart', params: {'title': til, 'price': this.price, 'num': this.num}})
    }
  },
  mounted () {
    this.fullscreenLoading = true
    setTimeout(() => {
      this.fullscreenLoading = false
    }, 500)

    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动，回到顶部
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  */deep/ .el-carousel__container {
    height: 500px
  }
  */deep/ .el-input-number--small {
    margin-left: -50%;
    margin-top:3%;
    width: 200px;
    line-height: 30px;
  }
  .text-left-g {
    text-align:left;
  }
  .custom-divider {
    margin: 10px; /* 上下间距 */
    width: 73%; /* 分割线长度 */
    margin-left: 0%;
  }
  .custom-button {
    position: relative;
    margin-left: -27%;
    width: 73%;
    height: 50px;
    margin-top:2%;
    border-radius: 30px;
    font-size: 18px;
  }
</style>
