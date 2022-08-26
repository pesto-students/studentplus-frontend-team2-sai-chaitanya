import { Button, Input, KeyOutlined, UserOutlined } from '../../atoms';
import styles from './loginForm.module.scss';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

const LoginForm = ({ authState, onLogin, setUsername, setPassword }) => {
  if (!authState.isAuthenticated) {
    return (
      <form className={styles.formCover} onSubmit={onLogin}>
        <h2 className={styles.formTitle}>Login</h2>
        <label className={styles.formLabel}>
          Welcome back! Please enter your details
        </label>
        <div className={styles.formGroup}>
          <Input
            type="text"
            placeholder="Email Address"
            prefix={<UserOutlined />}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            prefix={<KeyOutlined />}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </div>
      </form>
    );
  }
};

LoginForm.propTypes = {
  authState: PropTypes.object,
  onLogin: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

LoginForm.defaultProps = {
  authState: {},
  onLogin: _noop,
  setUsername: _noop,
  setPassword: _noop,
};

export default LoginForm;
