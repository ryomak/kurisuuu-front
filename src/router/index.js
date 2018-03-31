import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Qiita from '@/components/Qiita'
import Movie from '@/components/Movie'
import Github from '@/components/Github'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root

    },
    {
      path: '/qiita',
      name: 'qiita',
      component: Qiita
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/github',
      name: 'github',
      component: Github
    }
  ]
})
