import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buy from '@/components/Buy'
import ShopCart from '@/components/ShopCart'
import CheckOut from '@/components/CheckOut'
import PaySuccess from '@/components/PaySuccess'
import PayCancel from '@/components/PayCancel'
import BrandDetail from '@/components/BrandDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: PaySuccess
    },
    {
      path: '/payCancel',
      name: 'payCancel',
      component: PayCancel
    },
    {
      path: '/brandDetail',
      name: 'brandDetail',
      component: BrandDetail
    }
  ]
})
