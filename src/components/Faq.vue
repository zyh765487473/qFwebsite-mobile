<template>
  <div>
    <h3>{{title}}</h3>
    <el-collapse class="faq-div-css" v-model="activeName" accordion>
      <el-collapse-item v-for="item in textList" :key="item.id" :name="item.id">
        <template slot="title">
          <div class="custom-text">{{item.title}}</div>
        </template>
        <h4 class="faq-h3">{{item.text}}</h4>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Faq',
  data () {
    return {
      activeName: '1',
      title: 'Any questions? Let us answer them',
      textList: [
        {id: 1, title: 'How does it work?', text: "The device features many mechanical discs which open and close as you gently glide it over your skin. This allows them to adapt to the thickness of your hair, thick or thin, to pull it from the root - without touching your skin. The length of your session varies based on the size of the treatment area, ranging from seconds to a few minutes. This slows down hair regrowth, which can take up to four weeks, as Luminique influences your body's natural hair growth cycle."},
        {id: 2, title: 'Does it hurt?', text: 'It may cause discomfort at first, particularly for first-time users or those unaccustomed to waxing. The sensation, often described as a pinch, happens as you remove the hair from the root. But, many users report that this sensation diminishes over time, as hair becomes finer. Warming the skin before use and applying a soothing aloe vera product afterward can enhance comfort.'},
        {id: 3, title: 'Does hair grow back thicker?', text: "No! Research and dermatologists confirm, the technology in Luminique' influences the hair growth cycle by damaging your hair follicles. By removing hair from the root, Luminique signals your body to regenerate a new root and hair, which typically takes up to four-weeks. This repeated process weakens the follicle, resulting in thinner and finer hair regrowth."},
        {id: 4, title: 'Where is it sent from?', text: 'All domestic orders are sent from our warehouse in Texas, ensuring that your Luminique reaches you swiftly. We do this to hurry the delivery process, allowing you to enjoy smoother skin sooner.'},
        {id: 5, title: 'How long does the hair have to be?', text: 'Our Precision Technology is capable of removing hairs as short as 0.5mm, which is four times shorter than the minimum length required for waxing. This allows you to overcome set backs of other methods, ensuring a smooth and even skin surface without the need for unwanted hair growth.'}
      ]
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-text {
  font-size: 16px; /* 这里设置你想要的字体大小 */
  font-weight: bold;
}
.faq-div-css {
  width:80%;
  margin-left:10%;
}
.faq-h3 {
  text-align: left
}
.div-title-revew {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 100px rgba(0, 0, 0, .04);
  margin: 10px 0 10px 0;
  height: 100px;
}
</style>
