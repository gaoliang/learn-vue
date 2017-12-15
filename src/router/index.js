import Vue from 'vue'
import Router from 'vue-router'
import page1 from '@/components/pages/page1'
import page2 from '@/components/pages/page2'
import HelloWorld from '@/components/HelloWorld'
import layoutTest from '@/components/pages/layout-test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/page1/:message', // 传递参数
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/layout-test',
      name: 'layout-test',
      component: layoutTest
    }
  ]
})
