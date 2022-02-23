import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue'
import About from './components/About.vue'
import Select from './components/Select.vue'
import Modal from './components/Modal.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Manage from './components/Manage.vue'

export default createRouter({
  history : createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home', 
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
        path: '/select',
        name: 'select',
        component: Select
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/',
      name: 'default',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register', 
      component: Register
    },
    {
      path: '/manage',
      name: 'Manage', 
      component: Manage
    },
  ]
})