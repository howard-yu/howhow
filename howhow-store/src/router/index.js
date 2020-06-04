import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home/home.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', name: 'home', component: home, children: [] }
]

const createRouter = () =>
  new Router({
    routes: routes
  })

const router = createRouter()

export function setRouter(data) {
  return new Promise(resolve => {
    const asyncRoutes = []
    data.forEach(key => {
      switch (key) {
        case 'SALES RSF Input':
          asyncRoutes.push(home)
          break
      }
    })
    routes[0].children = []
    routes[0].children = asyncRoutes.slice(0)

    if (routes[0].children.length) {
      routes[0]['redirect'] = routes[0].children[0].path
    }
    router.addRoutes(routes)
    resetRouter()
    resolve(asyncRoutes)
    console.log('addRoutes', routes)
  })
}

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
