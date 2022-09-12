import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { LoginForm } from '../../../../../libs/ui-shared/src/lib/components';
import styles from './login.module.scss';
import IMAGE_PATHS from '../../../../../libs/ui-shared/public/images/constants';
import { Image } from '../../../../../libs/ui-shared/src/lib/components/atoms';
import { useState } from 'react';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginHandler = () => {
    oktaAuth
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
      <div className={styles.flexBox}>
        <div className={`${styles.flexItem} ${styles.leftBox} ${styles.ld}`}>
          <Image src={IMAGE_PATHS.LOGO} alt="" />
        </div>
        <div className={`${styles.flexItem} ${styles.rightBox}`}>
          <Image src={IMAGE_PATHS.WHITE_LOGO} alt="" className={styles.responsiveLogo}/>
          <LoginForm
            onLogin={onLoginHandler}
            setUsername={setUsername}
            setPassword={setPassword}
            authState={authState}
          />
        </div>
      </div>
    );
  }

  return <Redirect to="/" />;
};

export default Login;
