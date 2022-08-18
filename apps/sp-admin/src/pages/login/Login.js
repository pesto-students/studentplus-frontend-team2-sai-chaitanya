import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { LoginForm } from '../../components';
import styles from './login.module.scss';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return (
      <div className={styles.flexBox}>
        <div className={`${styles.flexItem} ${styles.leftBox} ${styles.ld}`}>
          <img src="../../../assets/logo.png" alt="" />
        </div>
        <div className={`${styles.flexItem} ${styles.leftBox} ${styles.sd}`}>
          <img src="../../../assets/logoWhite.png" alt="" />
        </div>
        <div className={`${styles.flexItem} ${styles.rightBox}`}>
          <LoginForm />
        </div>
      </div>
    );
  }

  return <Redirect to="/" />;
};

export default Login;
