import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../components/Layout/Layout';
import AnalyticsPage from '../views/Dashboard/Dashboard';



import { isAuthenticated } from '../mixins/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/app/main/analytics'},
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token');
        isAuthenticated(token) ? next() : next({path: '/login'});
      },
      children: [
        // main pages
        {
          path: 'main/analytics',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
      ],
    },
  ],
});
