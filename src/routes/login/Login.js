import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import bg from './bg.png';
import LoginForm from '../../components/LoginForm';
import s from './login.css';

class Login extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      login: true,
    }
  }

  toggleSignUp = (e) => {
    this.setState({
      login: !this.state.login,
    })
  }

  submitAction = (e) => {
    this.props.queueNotification({
      text: 'Uh Oh! Please Try Again Later'
    })
  }

  render() {
    return (
      <div
        style={{
          background: `url(${bg}) no-repeat, linear-gradient(-180deg, #EB5322 0%, #000000 100%)`,
          backgroundSize: 'cover',
        }}
        className={s.login}
      >
        <LoginForm 
          queueNotification={this.props.queueNotification}
          login={this.state.login}
          toggleSignUp={this.toggleSignUp}
          submitAction={this.submitAction}
        />
      </div>
    );
  }
}

export default withStyles(s)(Login);