import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import EditorView from '@/views/EditorView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/projects',
    redirect: '/projects/example'
  },
  {
    path: '/projects/:name',
    component: EditorView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = sessionStorage.getItem('user')

  if (!user && to.name !== 'login') {
    next('/login')
  } else next()
})

export default router
