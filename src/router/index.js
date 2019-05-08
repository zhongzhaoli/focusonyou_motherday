import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index';
import input from '../components/input/input';
import success from '../components/success/success';

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
