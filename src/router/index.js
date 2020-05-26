import Vue from 'vue'
import VueRouter from 'vue-router'
import DiskBVT from '../views/DiskBVT.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/disk/stability'
  },
  {
    path: '/disk/bvt',
    name: 'DiskBVT',
    component: DiskBVT
  },
  {
    path: '/disk/stability',
    name: 'DiskStability',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DiskStability.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
