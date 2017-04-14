import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Notification from '../Notification';
import s from './notificationStation.css';

class NotificationStation extends Component {
  static propTypes = {
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 2000,
  }

  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    }
  }

  deQueueNotification = () => {
    const notifications = this.state.notifications;
    notifications.shift();
    this.setState({
      notifications: notifications,
    })
  }
  queueNotification = (notification) => {
    const toAdd = this.state.notifications;
    toAdd.push(notification);
    this.setState({
      notifications: toAdd,
    })
    setTimeout(() => {
      this.deQueueNotification();
    }, this.props.timeout);
  }

  renderNotifications = () => {
    const { notifications } = this.state;
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        queueNotification: this.queueNotification,
      }),
    );
    const notifications = this.state.notifications.map((notification, i) =>
        <Notification text={notification.text} key={i} />
      );
    return (
      <div>
        <div
          className={s.notificationStation}
        >
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {notifications}
          </CSSTransitionGroup>
        </div>
        {childrenWithProps}
      </div>
    );
  }
}

export default withStyles(s)(NotificationStation);

