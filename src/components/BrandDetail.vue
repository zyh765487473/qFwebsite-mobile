<template>
  <div class="brand-story" v-loading.fullscreen.lock="fullscreenLoading">
    <Title :activeIndex=activeIndex></Title>
    <img :src="logo" alt="Brand Logo" class="logo">
    <h1>{{ title }}</h1>
    <p>{{ story }}</p >
    <div><Footer></Footer></div>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Title from './Title.vue'
export default {
  components: {
    Title,
    Footer
  },
  name: 'BrandDetail',
  data () {
    return {
      logo: require('../assets/logo.png'),
      activeIndex: '2',
      fullscreenLoading: false,
      title: '我们的品牌故事',
      story: `我们始终致力于为客户提供最优质的产品和服务。我们的品牌建立在信任、
              质量和创新的基础上。多年来，我们不断努力改进我们的产品，满足客户的需求，
              并且我们对未来充满信心，期待继续为您提供卓越的体验。`
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

<style scoped>
.brand-story {
  text-align: center;
  padding: 20px;
}
.logo {
  width: 150px;
  margin-bottom: 20px;
}
h1 {
  font-size: 2em;
  margin-bottom: 10px;
}
p {
  font-size: 1.2em;
  line-height: 1.6;
}
</style>
