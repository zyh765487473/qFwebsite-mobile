<template>
  <div class="div-size-review">
    <div class="div-title-revew">
      <div style="height: 10px;"></div>
      <h1>Check out everyone’s experience</h1>
    </div>
    <el-row style="margin-top:10px" v-for="item in reviewCon" :key=item.length :gutter="12">
      <el-col v-for="con in item" :key=con.length :span="8">
        <el-card shadow="always">
          <!--
            用户名   验证购买
            日期
            星星
            图片
            评论(标题+内容)
          -->
          <h3 v-html="con.title"></h3>
          <h4>{{con.date}}</h4>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <el-image
            :src="con.url">
          </el-image>
          <h3>{{con.reviewTitle}}</h3>
          <h4>{{con.reviewCon}}</h4>
        </el-card>
      </el-col>
    </el-row>
    <el-button type="text" v-if=show @click="showReviews()" style="margin-top:20px; font-size:20px; color:black">Show more reviews</el-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'Review',
  data () {
    return {
      value: 5,
      show: true,
      reviewCon: [
        [{'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/3.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}, {'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/2.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}, {'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/1.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}]
      ],
      a: [{'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/3.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}, {'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/2.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}, {'title': "Rachel C.        <i class='el-icon-success'></i>Verified purchase", 'date': '2024.05.20', 'url': require('@/assets/1.jpg'), 'reviewTitle': 'Wow just wow', 'reviewCon': 'This product is amazing! I used to be afraid of removing hair under my eyes and shaving so frequently caused rashes for me. Not only does it prevent ingrown hair, it’s almost painless. Because it’s so small, the pain is manageable. You’ll just have to go over the spots a couple times and I’m ok with that for the results! Have used on bikini line too and the hair hasn’t grown back for 3 weeks now! Don’t know how long this little thing will last, but if it does break down from use I’ll be sure to buy another!'}]
    }
  },
  methods: {
    showReviews () {
      this.reviewCon.length > 2 ? this.show = false : this.reviewCon.push(this.a)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div-title-revew {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 100px rgba(0, 0, 0, .04);
  margin: 10px 0 10px 0;
  height: 100px;
}
.div-size-review {
  width:80%;
  margin-left:10%
}
</style>
