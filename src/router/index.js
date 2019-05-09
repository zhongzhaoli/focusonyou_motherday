import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index';
import input from '../components/input/input';
import success from '../components/success/success';
import poster from '../components/poster/poster';
import poster_success from '../components/poster_success/poster_success';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/poster',
      name: 'poster',
      component: poster
    },
    {
      path: "/poster_success",
      name: "poster_success",
      component: poster_success
    }
  ]
})
