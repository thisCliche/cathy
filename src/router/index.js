import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Note from '../views/home/Note.vue'
import Time from '../views/home/Time.vue'
import Personal from '../views/home/Personal.vue'
import Add from '../views/home/Add.vue'
import Edit from '../views/home/Edit.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/time',
    children: [
      {
        path: '/note', component: Note,
      },
      { path: '/time', component: Time },
      { path: '/personal', component: Personal },

    ]
  },
  { path: '/add', component: Add },
  { path: '/edit/:id', component: Edit }
]

const router = new VueRouter({
  routes
})

import { Notify } from 'vant';
router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  const tokenStr = window.localStorage.getItem('token')
  if (!tokenStr) {
    Notify({
      message: '请先登录！',
      type: 'danger'
    });
    return next('/login')
  }
  next()
})

export default router

