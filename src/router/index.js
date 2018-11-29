import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
