import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'IndexPage',
    component: Index,
    meta: { index: 1 }
  },
  {
    path: '/find',
    name: 'FindPage',
    component: () => import('../views/find/Find.vue'),
    meta: { index: 1 }
  },
  {
    path: '/message',
    name: 'MessagePage',
    component: () => import('../views/message/Message.vue'),
    meta: { index: 1 }
  },
  {
    path: '/my',
    name: 'MyPage',
    component: () => import('../views/my/My.vue'),
    meta: { index: 1 }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/login/Login.vue'),
    meta: { index: 2 }
  }
]

const router = new VueRouter({
  routes
})

export default router
