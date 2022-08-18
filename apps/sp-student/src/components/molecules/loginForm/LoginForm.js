import React, { useState } from 'react';
import {
  Button,
  Input,
  KeyOutlined,
  Label,
  Title,
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
    try {
      const transaction = await oktaAuth.signInWithCredentials({
        username: username,
        password: password,
      });
      const { status, sessionToken } = transaction;
      if (status === 'SUCCESS') {
        oktaAuth.signInWithRedirect({
          originalUri: '/',
          sessionToken,
        });
      }
    } catch (err) {
      console.log('Login Custom Error', err);
    }
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
        <div className={styles.loginHeading}>
          <Title level={3}>Login</Title>
          <Label strong={false} className={styles.loginLabel}>
            Welcome back! Please enter your details
          </Label>
        </div>
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
          <Button variant="contained" htmlType="submit">
            Sign in
          </Button>
        </div>
      </form>
    );
  }
};

export default LoginForm;
