import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Buy from '@/components/Buy'
import ShopCart from '@/components/ShopCart'
import CheckOut from '@/components/CheckOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: ShopCart
    },
    {
      path: '/checkOut',
      name: 'checkOut',
      component: CheckOut
    }
  ]
})
