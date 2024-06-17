<template>
  <div>
    <transition name="fade">
      <FloatingPanel v-if="logo"></FloatingPanel>
    </transition>
    <Title :activeIndex=activeIndex></Title>
    <div class="div-top-home">
      <div class="img-home-pos">
        <div class="div-imgd-home">
          <h3 class="text-color-home">Luminique</h3>
            <h5 class="text-color-home">women face epilator</h5>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-button type="info" class="custom-button" plain>LEARN MORE</el-button>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button type="info" @click="buy()" class="custom-button" plain>SHOP NOW</el-button>
                </div>
              </el-col>
            </el-row>
        </div>
        <el-image :src="require('@/assets/1.jpg')" lazy class="imgd-home"></el-image>
      </div>
      <div></div>
      <div class="img-home-pos">
        <div class="div-imgd-home">
          <h4 class="text-color-home">Luminique</h4>
            <h5 class="text-color-home">women face epilator</h5>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-button type="info" class="custom-button" plain>LEARN MORE</el-button>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-button type="info" @click="buy()" class="custom-button" plain>SHOP NOW</el-button>
                </div>
              </el-col>
            </el-row>
        </div>
        <el-image :src="require('@/assets/2.jpg')" lazy class="imgd-home"></el-image>
      </div>
      <div></div>
      <div><Faq></Faq></div>
      <div><Review></Review></div>
      <div><Footer></Footer></div>
    </div>
</div>
</template>

<script>
import Title from './Title.vue'
import FloatingPanel from './FloatingHomePage.vue'
import Faq from './Faq.vue'
import Review from './Review.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Title,
    FloatingPanel,
    Faq,
    Review,
    Footer
  },
  name: 'Home',
  data () {
    return {
      activeIndex: '1',
      logo: true,
      url: 'https://ulikebeauty.com/public/static/ulike/images/logo_f.svg'
    }
  },
  methods: {
    buy (key) {
      this.$router.push({name: 'buy'})
    },
    showDiv () {
      setTimeout(() => {
        this.logo = false
      }, 1500) // 1.5秒后隐藏div
    }
  },
  mounted () {
    this.showDiv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.div-top-home {
  margin-top:30px;
}
.img-home-pos {
  position:relative;
  z-index: 11;
  margin-top: -4px;
}
.custom-button {
  height: 28px;
  margin-top:0%;
  border-radius: 10px;
  width:90%;
  font-size:10px;
  font-weight:bold
}
.text-color-home {
  color:white
}
.el-carousel-item-home {
  background-color: rgba(0,0,0,0)
}
.div-imgd-home {
  position:absolute;
  z-index:2;
  left:36%;
  top:40%;
  width: 50%;
  margin-left:-10%
}
.imgd-home {
  width: 100%;
  height:100%;
  object-fit: cover;
}
</style>
