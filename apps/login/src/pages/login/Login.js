import { useOktaAuth } from '@okta/okta-react';
import SignInForm from '../../../../../libs/ui-shared/src/lib/components/organisms';
import './login.scss';

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const logout = async () => { await oktaAuth.signOut() };

  return (
      <>
      {authState && authState.isAuthenticated && (
        <div onClick={logout}>Logout</div>
        )}

        {!authState || !authState.isAuthenticated
        && (
          <div className="flexBox">
            <div className="flexItem leftBox ld">
              <img src='../../../assets/logo.png' alt=""/>
            </div>
            <div className="flexItem leftBox sd">
              <img src='../../../assets/logoWhite.png' alt=""/>
            </div>
            <div className="flexItem rightBox">
              <SignInForm/>
            </div>
          </div>
        )}
      </>
  );
};
export default Login;