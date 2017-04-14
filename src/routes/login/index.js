import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';

export default {

  path: '/login',

  async action({store}) {
    const loggedIn = store.getState().user;
    if (loggedIn) {
      return { redirect: '/'}
    }
    return {
      title: 'Login',
      component: <Layout><Login /></Layout>,
    };
  },

};
