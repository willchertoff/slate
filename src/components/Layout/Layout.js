import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import NotificationStation from '../NotificationStation';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <NotificationStation>
          {this.props.children}
        </NotificationStation>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
