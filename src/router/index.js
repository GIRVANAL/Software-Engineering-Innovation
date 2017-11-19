import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import list from '@/components/bloglist'
import blog from '@/components/blog'
import usercenter from '@/components/usercenter'



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: login
    },{
    	path: '/list',
    	name: 'list',
    	component: list
    },{
      path: '/blog/:id',
      name: 'blog',
      component: blog
    },{
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter
    }
  ]
})
