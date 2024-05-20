<template>
  <PayPal
    amount="9.99"
    currency="USD"
    :client="credentials"
    env="sandbox"
    :button-style="buttonStyle"
    :items="myItems"
    @payment-authorized="paymentAuthorized"
    @payment-completed="paymentCompleted"
    @payment-cancelled="paymentCancelled"
    >
    </PayPal>
</template>

<script>
import PayPal from 'vue-paypal-checkout'
export default {
  components: {
    PayPal
  },
  name: 'PaypalBut',
  data () {
    return {
      credentials: {
        sandbox: 'ARsUMwAkvhXntEC1lM4XAwtNhnuvGB3Y-UYIef2ge9RRDjR8fkm1MHcsWCURTXdYMjBHOa0x1EZ8ByEf',
        production: ''
      },
      buttonStyle: {
        label: 'checkout',
        size: 'responsive',
        shape: 'pill',
        color: 'blue'
      },
      myItems: [{'name': '5minskin ipl hair device', 'description': 'Brown hat.', 'quantity': '1', 'price': '9.99', 'currency': 'USD'}]
    }
  },
  methods: {
    // 1. 先授权paymentAuthorized（）  2. 支付成功以后paypal回调paymentCompleted  3. 存储用户回调数据（理论上是需要一个保存订单的接口方便保留用户支付数据）
    paymentAuthorized (data) {
    // 授权完成的回调，可以拿到订单id
      console.log(data)
    },

    paymentCompleted (data) {
      // 用户支付完成的回调，可以拿到订单id
      console.log(data)
    },

    paymentCancelled (data) {
      // 用户取消交易的回调
      console.log(data)
    }
  },
  create () {
  },
  mounted () {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
