import React, { useState } from 'react';
import {
  Button,
  Input,
  KeyOutlined,
  UserOutlined,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './loginForm.module.scss';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/';

const LoginForm = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    await oktaAuth
      .signInWithCredentials({
        username: username,
        password: password,
      })
      .then(function (transaction) {
        const { status, sessionToken } = transaction;
        if (status === 'SUCCESS') {
          oktaAuth.signInWithRedirect({
            originalUri: '/',
            sessionToken,
          });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  if (!authState) {
    return <div>Loading...</div>;
  }

  if (authState.isAuthenticated) {
    <Redirect to="/" />;
  }

  if (!authState.isAuthenticated) {
    return (
      <form className={styles.formCover} onSubmit={handleLogin}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            prefix={<KeyOutlined />}
            name="password"
            value={password}
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

export default LoginForm;
