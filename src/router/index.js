import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Login = () => import('../app/Login.vue')
const Btn = () => import('../components/test-btn.vue')
const Nav = () => import('../app/nav.vue')
// import Login from '../app/Login.vue'
// import Btn from '../components/test-btn.vue'
// import Nav from '../app/nav.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/btn', name: 'btn', component: Btn },
    { path: '/nav', name: 'nav', component: Nav },
  ],
  mode: 'history'
})
