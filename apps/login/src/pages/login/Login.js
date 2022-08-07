import { useOktaAuth } from '@okta/okta-react';
import React, { useState } from 'react';
import SignInForm from '../../components/organisms/forms/signInForm';
import './login.css';

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const logout = async () => oktaAuth.signOut();
  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>

        {authState.isAuthenticated && (
        <div onClick={logout}>Logout</div>
        )}

        {!authState.isAuthenticated
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

      </div>
    </div>
  );
};
export default Login;
