import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

import VisitsPage from '@/pages/Visits/Visits';
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

import Login from '@/pages/Login/Login';
import LoginExample from '@/pages/Extra/LoginExample/LoginExample';
import Register from '@/pages/Register/Register';
import ErrorPage from '@/pages/Error/Error';



import { isAuthenticated } from './mixins/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/app/main/analytics'},
    {path: '/documentation', redirect: '/documentation/getting-started/overview'},
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/extra/login',
      name: 'LoginExample',
      component: LoginExample,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
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
        {
          path: 'main/visits',
          name: 'VisitsPage',
          component: VisitsPage,
        },
      ],
    },
  ],
});
