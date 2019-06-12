import Vue from 'vue'
import Router from 'vue-router'
import split from '@/components/split'
import concept from '@/components/concept'
import history from '@/components/history'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'split',
      component: split
    },
    {
      path: '/concept',
      name: 'concept',
      component: concept
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
