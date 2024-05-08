<template>
  <div>
    <transition name="fade">
      <FloatingPanel v-if="logo"></FloatingPanel>
    </transition>
    <Title :activeIndex=activeIndex></Title>
    <div class="demo-image__lazy">
      <div style="position:relative;  z-index: 11;">
        <div calss="floating-panel-but" style="position:absolute; z-index:2; left:44%; top:80%">
          <h1>Luminique</h1>
            <h4>women face epilator</h4>
            <el-row>
              <el-button style="font-size:100%" type="primary" plain>了解更多</el-button>
              <el-button @click="buy()" style="font-size:100%" type="primary" plain>即可选购</el-button>
            </el-row>
        </div>
        <el-image :src="require('@/assets/1.jpg')" lazy style="width: 100%;height:100%;object-fit: cover;"></el-image>
      </div>
      <div></div>
      <div style="position:relative;  z-index: 11;">
        <div calss="floating-panel-but" style="position:absolute; z-index:2; left:44%; top:80%">
          <h1>Luminique</h1>
            <h4>women face epilator</h4>
            <el-row>
              <el-button style="font-size:100%" type="primary" plain>了解更多</el-button>
              <el-button @click="buy()" style="font-size:100%" type="primary" plain>即可选购</el-button>
            </el-row>
        </div>
        <el-image :src="require('@/assets/2.jpg')" lazy style="width: 100%;height:100%;object-fit: cover;"></el-image>
      </div>
      <div></div>
      <div>
        <el-carousel :interval="2000" type="card">
          <el-carousel-item style="background-color: rgba(0,0,0,0)" v-for="item in imgList" :key="item.id">
            <img style="object-fit: scale-down; width:100%; height:100%" :src="item.idView">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div><Faq></Faq></div>
      <div>我是评论模块</div>
      <div>我是页尾模块</div>
      <div>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <h2>Luminique</h2>
              <div>123123</div>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">这是第一个模块</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div>这是第二个模块</el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div>这是第三个模块</el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div>这是第四个模块</el-col>
        </el-row>
      </div>
    </div>
</div>
</template>

<script>
import Title from './Title.vue'
import FloatingPanel from './FloatingHomePage.vue'
import Faq from './Faq.vue'

export default {
  components: {
    Title,
    FloatingPanel,
    Faq
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
</style>
