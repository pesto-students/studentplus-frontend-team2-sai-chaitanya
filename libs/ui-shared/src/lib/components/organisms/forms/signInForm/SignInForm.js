import { useOktaAuth } from '@okta/okta-react';
import React, { useState } from 'react';
import Button from '../../../atoms';
import {Input} from '../../../atoms';
import styles from './signinform.module.scss';

const SignInForm = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function updateUserName(value) {
    setUsername(value);
  }
  function updatePassword(value) {
    setPassword(value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
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
  };

  const ids = {
    username: 'username',
    password: 'password',
  };
  const labels = {
    username: 'Username',
    password: 'Password',
  };
  const names = {
    username: 'username',
    password: 'password',
  };
  const types = {
    username: 'text',
    password: 'password',
  };

  return (
    <form className="formCover" onSubmit={handleLogin}>
      <h2 className="formTitle">Login</h2>
      <label className="formLabel">
        Welcome back! Please enter your details
      </label>
      <div className={styles.formGroup}>
        <div className ={styles.inputField}>
          <Input
            id={ids.username}
            label={labels.username}
            name={names.username}
            type={types.username}
            onChangeCallback={updateUserName}
          />
        </div>
        <div className ={styles.inputField}>
          <Input
            id={ids.password}
            label={labels.password}
            name={names.password}
            type={types.password}
            onChangeCallback={updatePassword}
          />
        </div>
        <Button variant="contained" type="primary" htmlType="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
