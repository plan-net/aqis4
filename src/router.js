import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/views/Overview'
import Client from '@/views/Client'
import Dashboard from '@/views/Dashboard'
import DemoPlacement from '@/views/DemoPlacement'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
    meta: {
      // auth: true,
      hideNav: false,
      title: 'Overview'
    }
  },
  {
    path: '/client/:id',
    name: 'client',
    component: Client,
    props: true,
    meta: {
      auth: true,
      hideNav: false,
      title: 'Client'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true,
      hideNav: false,
      title: 'Dashboard'
    }
  },
  {
    path: '/demo-placement',
    name: 'demo-placement',
    component: DemoPlacement,
    meta: {
      auth: true,
      hideNav: false,
      title: 'Dashboard'
    }
  }
]

const router = new Router({
  routes
})

router.beforeEach(async (to, from, next) => {
  return next()
})

export default router
