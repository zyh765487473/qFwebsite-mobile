<template>
  <div>
    <transition name="fade">
      <FloatingPanel v-if="logo"></FloatingPanel>
    </transition>
    <Title :activeIndex=activeIndex></Title>

    <div class="div-top-home">
      <el-carousel :interval="2000" type="card">
        <el-carousel-item style="background-color: rgba(0,0,0,0)" v-for="item in imgList" :key="item.id">
          <img style="object-fit: scale-down; width:100%; height:100%" :src="item.idView">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="div-top-home">
      <div class="img-home-pos">
        <div style="position:absolute; z-index:2; left:44%; top:80%; width: 30%; margin-left:-10%">
          <h1 class="text-color-home">Luminique</h1>
            <h4 class="text-color-home">women face epilator</h4>
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
        <el-image :src="require('@/assets/1.jpg')" lazy style="width: 100%;height:100%;object-fit: cover;"></el-image>
      </div>
      <div></div>
      <div class="img-home-pos">
        <div style="position:absolute; z-index:2; left:44%; top:80%; width: 30%; margin-left:-10%">
          <h1 class="text-color-home">Luminique</h1>
            <h4 class="text-color-home">women face epilator</h4>
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
        <el-image :src="require('@/assets/2.jpg')" lazy style="width: 100%;height:100%;object-fit: cover;"></el-image>
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
      imgList: [
        {id: 0, idView: require('@/assets/1.jpg')},
        {id: 1, idView: require('@/assets/2.jpg')},
        {id: 2, idView: require('@/assets/3.jpg')}
      ],
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
      }, 2000) // 2秒后隐藏div
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
    width: 75%;
    height: 50px;
    margin-top:0%;
    border-radius: 40px;
    width:60%;
    font-size:15px;
    font-weight:bold
  }
  .text-color-home {
    color:white
  }
</style>
