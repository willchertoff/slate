import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import mark from './mark.svg';
import pass from './password-icon.svg';
import use from './user-icon.svg';
import s from './login-form.css';

const buttonText = (login) => login ? 'Login Now' : 'Create Account';
const footText = (login) => login ? 'Create Account' : 'Login';

class LoginForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { login } = this.props;
    return (
      <div
        style={{
          width: '326px',
          height: '500px',
        }}
      >
        <img 
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '100px',
          }}
          src={mark} 
        />
          <form
            onSubmit={this.props.submitAction}
          >
            <div className={s['input-container']}>
              <img src={use} />
              <input 
                type="text"
                placeholder="Username"
                className={s['wc-input']}
              />
            </div>
            <div className={s['input-container']}>
              <img src={pass} />
              <input 
                type="password"
                placeholder="Password" 
                className={s['wc-input']}
              />
            </div>
            <button
              className={s['wc-button']}
              type='submit'
            >
              {buttonText(login)}
            </button>
          </form>
          <div className={s['form-row']}>
            <a onClick={this.props.toggleSignUp}>{footText(login)}</a>
            <a>Need Help?</a>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(LoginForm);
