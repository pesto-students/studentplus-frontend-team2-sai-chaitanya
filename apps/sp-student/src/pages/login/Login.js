import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { LoginForm, Button } from '../../components';
import styles from './login.module.scss';
import IMAGE_PATHS from '../../../../../libs/ui-shared/public/images/constants';
import { Image } from '../../../../../libs/ui-shared/src/lib/components/atoms';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return (
      <div className={styles.flexBox}>
        <div className={`${styles.flexItem} ${styles.leftBox} ${styles.ld}`}>
          <Image src={IMAGE_PATHS.LOGO} alt="" />
        </div>
        <div className={`${styles.flexItem} ${styles.leftBox} ${styles.sd}`}>
          <Image src={IMAGE_PATHS.WHITE_LOGO} alt="" />
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
