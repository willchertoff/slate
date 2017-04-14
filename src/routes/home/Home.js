import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
