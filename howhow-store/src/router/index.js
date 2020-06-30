import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/count'
import TodoList from '@/components/page/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/todo',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
