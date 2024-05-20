<template>
  <div style="margin-top: 0px;">
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
            <el-input size="medium" v-model="Phone" placeholder=""></el-input>
          </div>
          <el-button type="info" class="but-check-out">CONTINUE WITH PAYPAL</el-button>
        </el-col>
        <el-col :span="10" class="el-col-right-check-out">
          <el-card class="box-card">
              <div><h1 class="text-left-check-out margin-left-3-check-out">Order Summary</h1></div>
              <div>
                <el-divider></el-divider>
                <h2 class="text-left-check-out margin-left-3-check-out">item</h2>
              </div>
              <div>
                <el-row>
                  <el-col :span="6">
                    <el-image class="el-col-l-check-out" :src="require('@/assets/1.jpg')">
                    </el-image>
                  </el-col>
                  <el-col :span="12">
                    <div class="el-col-m-check-out">
                      Silk·épil 9 Flex Epilator, Beauty Set with FaceSpa, SES 9300
                    </div>
                  </el-col>
                  <el-col :span="6"><div class="el-col-r-check-out">$389.98</div></el-col>
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
                      <h4 class="text-right-check-out margin-right-3-check-out">$389.98</h4>
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
                      <h2 class="text-right-check-out margin-right-3-check-out">$389.98</h2>
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
export default {
  name: 'CheckOut',
  data () {
    return {
      email: '',
      activeNames: '1'
    }
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
