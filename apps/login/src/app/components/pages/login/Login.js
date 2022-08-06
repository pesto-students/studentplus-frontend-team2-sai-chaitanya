import { useOktaAuth } from '@okta/okta-react';
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginWarning, setLoginWarning] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault(); 
    await oktaAuth.signInWithCredentials({
      username: username,
      password: password
    })
    .then(function(transaction) {
      const { status, sessionToken } = transaction;
      if(status==="SUCCESS"){
        oktaAuth.signInWithRedirect({
          originalUri : '/',
          sessionToken
        });
      }

    })
    .catch(function(err) {
      setLoginWarning(true);
    });
  };

  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>

        { authState.isAuthenticated && <div>Loading user information...</div>}

        {authState.isAuthenticated && (
        <div>Logged In</div>
        )}

        {!authState.isAuthenticated
        && (
          <div className="flexBox">
            <div className="flexItem leftBox ld">
              <img src='./assets/logo.png' alt=""/>
            </div>
            <div className="flexItem leftBox sd">
              <img src='./assets/logoWhite.png' alt=""/>
            </div>
            <div className="flexItem rightBox">
              <form method="post" className="formCover" onSubmit={handleLogin}>
                <h2 className="formTitle">Login</h2>
                <label className="formLabel">Welcome back! Please enter your details</label>
                { loginWarning && (
                  <label className="loginWarning">Please enter valid credentials</label>
                )}
                <div className="inputCover">
                  <label className="inpuLabel">Username</label>
                  <input id="username" type="text" onChange={event => setUsername(event.target.value)} value={username} />
                </div>
                <div className="inputCover">
                  <label className="inpuLabel">Password</label>
                  <input id="password" type="password" onChange={event => setPassword(event.target.value)} value={password} />
                </div>
                <div className="inputCover rememberMeCover">
                  <input id="rememberMe" className="rememberMe" type="checkbox" />
                  <label className="inpuLabel ">Remember me</label>
                </div>
                <div className="inputCover">
                  <input id="submit" type="submit" value="Sign in" />
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default Login;
