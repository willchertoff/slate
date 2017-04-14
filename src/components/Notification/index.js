import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './notification.css';

const Notification = (props) =>
  <div
    className={s.notification}
  >
    {props.text}
  </div>

export default withStyles(s)(Notification);