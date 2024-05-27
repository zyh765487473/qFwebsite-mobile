<template>
  <div style="margin-top: 0px;" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="div-backg-check-out">
      <div>
        <el-image
            class="img-title" style="height: 100px; margin-right: 62%; margin-top: 1%;"
            :src="require('@/assets/logo.jpg')"></el-image>
      </div>
    </div>
    <div class="div-check-out">
      <el-row>
        <el-col :span="14" class="el-col-width-check-out">
          <div>
            <h1 class="text-left-check-out">Customer</h1>
            <div class="sub-title float-left-check-out margin-check-out">Email：</div>
            <el-input size="medium" v-model="email" placeholder=""></el-input>
          </div>
          <div>
            <h1 class="text-left-check-out">Shipping</h1>
            <h3 class="text-left-check-out">Shipping Address</h3>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="sub-title float-left-check-out margin-check-out">First Name:</div>
                <el-input size="medium" v-model="firstName" placeholder=""></el-input>
              </el-col>
              <el-col :span="12">
                <div class="sub-title float-left-check-out margin-check-out">Last Name:</div>
                <el-input size="medium" v-model="lastName" placeholder=""></el-input>
              </el-col>
            </el-row>
            <div class="sub-title float-left-check-out margin-check-out">Country:</div>
            <el-input size="medium" v-model="country" placeholder=""></el-input>
            <div class="margin-check-out"></div>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="sub-title float-left-check-out margin-check-out">Postal Code:</div>
                <el-input size="medium" v-model="code" placeholder=""></el-input>
              </el-col>
              <el-col :span="12">
                <div class="sub-title float-left-check-out margin-check-out">State/Province:</div>
                <el-input size="medium" v-model="province" placeholder=""></el-input>
              </el-col>
            </el-row>
            <div class="sub-title float-left-check-out margin-check-out">City:</div>
            <el-input size="medium" v-model="city" placeholder=""></el-input>
            <div class="sub-title float-left-check-out margin-check-out">Address:</div>
            <el-input size="medium" v-model="addressOne" placeholder=""></el-input>
            <div class="sub-title float-left-check-out margin-check-out">Apartment/Suite/Building (Optional):</div>
            <el-input size="medium" v-model="addressTwo" placeholder=""></el-input>
            <div class="sub-title float-left-check-out margin-check-out">Phone Number:</div>
            <el-input size="medium" v-model="phone" placeholder=""></el-input>
          </div>
          <el-button type="info" class="but-check-out" @click="commitOrder">CONTINUE WITH PAYPAL</el-button>
        </el-col>
        <el-col :span="10" class="el-col-right-check-out">
          <el-card class="box-card">
              <div><h1 class="text-left-check-out margin-left-3-check-out">Order Summary</h1></div>
              <div>
                <el-divider></el-divider>
                <h2 class="text-left-check-out margin-left-3-check-out">{{ num }} * item</h2>
              </div>
              <div>
                <el-row>
                  <el-col :span="6">
                    <el-image class="el-col-l-check-out" :src="require('@/assets/1.jpg')">
                    </el-image>
                  </el-col>
                  <el-col :span="12">
                    <div class="el-col-m-check-out">
                      {{ title }}
                    </div>
                  </el-col>
                  <el-col :span="6"><div class="el-col-r-check-out">$ {{ total }}</div></el-col>
                </el-row>
              </div>
              <div>
                <el-divider></el-divider>
                <el-row>
                  <el-col :span="12">
                    <div>
                      <h4 class="text-left-check-out margin-left-5-check-out">Subtotal</h4>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <h4 class="text-right-check-out margin-right-3-check-out">$ {{ total }}</h4>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <div>
                      <h4 class="text-left-check-out margin-left-5-check-out">Shipping</h4>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <h4 class="text-right-check-out margin-right-3-check-out">Free</h4>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-divider></el-divider>
                <el-row>
                  <el-col :span="12">
                    <div>
                      <h4 class="text-left-check-out margin-left-5-check-out">Total (USD)</h4>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <h2 class="text-right-check-out margin-right-3-check-out">$ {{ total }}</h2>
                    </div>
                  </el-col>
                </el-row>
              </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default {
  components: {
    Cookies,
    axios,
    CryptoJS
  },
  name: 'CheckOut',
  data () {
    return {
      email: '', // 邮件
      activeNames: '1',
      total: 0, // 总价
      title: '', // 标题
      firstName: '', // 姓
      lastName: '', // 名
      country: '', // 国家
      code: '', // 邮编
      province: '', // 洲
      city: '', // 市
      addressOne: '', // 地址1
      addressTwo: '', // 地址2
      phone: '', // 手机号码
      num: 0,
      price: 0,
      fullscreenLoading: false
    }
  },
  methods: {
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
      } else {
        title = params.title // 标题
        num = params.num // 数量
        price = params.price // 单价
        total = params.total // 总价
        Cookies.set('title', title)
        Cookies.set('num', num)
        Cookies.set('price', price)
        Cookies.set('total', total)
      }
      this.title = title // 标题
      this.num = num // 数量
      this.price = price // 单价
      this.total = total // 总价
    },
    commitOrder () {
      this.fullscreenLoading = true
      // 校验
      if (!this.validate()) {
        this.fullscreenLoading = false
        return 0
      }
      // 提交订单
      let md5 = this.total + this.email + this.code + this.phone + this.country + 'qf-01' + '4f5af48e7ate8whfkjawA*456' // 与后台的校验
      md5 = CryptoJS.MD5(md5).toString()
      const postData = {
        email: this.email,
        productId: 'qf-01', // 这里先写死
        country: this.country,
        addressOne: this.addressOne,
        addressTwo: this.addressTwo,
        city: this.city,
        province: this.province,
        code: this.code,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        price: this.price,
        orderPrice: this.total,
        num: this.num,
        postage: 0, // 物流暂时没有就写死0
        otherInfo: {'description': this.title},
        md5: md5
      }
      axios.post('http://122.8.184.48:8081/paypal/pay', postData)
        .then(response => {
          console.log(response)
          if (response.data.code !== 1) {
            this.fullscreenLoading = false
            this.messageInfo(response.data.message)
          } else {
            window.location.href = response.data.data
          }
        })
        .catch(error => {
          this.fullscreenLoading = false
          console.error('There was an error!', error)
        })
    },
    validate () {
      // 邮箱校验
      if (this.email === '') {
        this.messageInfo('Email Name cannot be empty')
        return false
      }
      // 姓校验
      if (this.firstName === '') {
        this.messageInfo('First Name cannot be empty')
        return false
      }
      // 名校验
      if (this.lastName === '') {
        this.messageInfo('Last Name cannot be empty')
        return false
      }
      // 国家校验
      if (this.country === '') {
        this.messageInfo('Country cannot be empty')
        return false
      }
      // 邮编校验
      if (this.code === '') {
        this.messageInfo('Postal Code cannot be empty')
        return false
      }
      // 洲校验
      if (this.province === '') {
        this.messageInfo('State/Province cannot be empty')
        return false
      }
      // 城市校验
      if (this.city === '') {
        this.messageInfo('City cannot be empty')
        return false
      }
      // 地址校验
      if (this.addressOne === '') {
        this.messageInfo('Address cannot be empty')
        return false
      }
      // 手机校验
      if (this.phone === '') {
        this.messageInfo('Phone Number cannot be empty')
        return false
      }
      return true
    },
    messageInfo (msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      })
    }
  },
  mounted () {
    this.initInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*>>> .el-input--medium .el-input__inner {
    height: 43px;
    line-height: 36px;
}

.float-left-check-out {
  float: left
}

.text-left-check-out {
  text-align: left;
}

.text-right-check-out {
  text-align: right;
}

.margin-check-out {
  margin-bottom: 2%;
  margin-top: 2%;
}
.margin-left-3-check-out {
  margin-left: 3%;
}

.margin-left-5-check-out {
  margin-left: 5%;
}

.margin-right-3-check-out {
  margin-right: 3%;
}

.div-check-out {
  width: 70%;
  margin-left: 15%;
}
.div-backg-check-out {
  background-color: #DDDDDD;
  height: 150px;
}

.el-col-width-check-out {
  width: 50%;
}

.but-check-out {
  width: 100%;
  margin-top: 3%;
  height: 53px;
  margin-bottom: 5%;
  background-color: black;
  font-size: 18px;
}

.el-col-right-check-out {
  margin-left: 15%;
  width: 35%;
  margin-top: 3%;
}

.el-col-m-check-out {
  float:left;
  margin-top: 4%;
  text-align: left;
  margin-left: 5%;
}

.el-col-r-check-out {
  float:right;
  margin-top: 20%;
  margin-right: 5%;
}

.el-col-l-check-out {
  width: 80px;
  height: 80px
}

.div-title {
  width: 50%;
  height: 50px;
}
</style>
