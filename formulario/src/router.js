import Vue from 'vue'
import Router from 'vue-router'
import Reportt from './views/Reportt';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/Reportt',
    name: 'Reportt',
    component: Reportt
    },
    {
      path: '/',
      name: 'Ops',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Ops.vue')
    }
  ]
})
