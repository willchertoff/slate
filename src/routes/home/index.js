import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

export default {

  path: '/',

  async action({ store }) {

    const loggedIn = store.getState().user;
    if (!loggedIn) {
      return { redirect: '/login'}
    }

    return {
      title: 'Home',
      component: <Layout><Home /></Layout>,
    };
  },

};
