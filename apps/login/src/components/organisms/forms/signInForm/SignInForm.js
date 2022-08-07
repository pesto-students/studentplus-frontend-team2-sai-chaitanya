import { useOktaAuth } from '@okta/okta-react';
import React, { useState } from 'react';
import FormGroup from "../../../molecules/formGroup"

const SignInForm = () => {

  const { authState, oktaAuth } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function usernameHandler(value){
    setUsername(value);
  }
  function passwordHandler(value){
    setPassword(value);
  }

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

    const classes = {
        username : 'username',
        password : 'password'
    }
    const ids = {
        username : 'username',
        password : 'password'
    }
    const labels = {
        username : 'Username',
        password : 'Password'
    }
    const names = {
        username : 'username',
        password : 'password'
    }
    const types = {
        username : 'text',
        password : 'password'
    }

  return (
    <form className="formCover" onSubmit={handleLogin}>
        <h2 className="formTitle">Login</h2>
        <label className="formLabel">Welcome back! Please enter your details</label>
        <FormGroup classes={classes} ids={ids} labels={labels} names={names} types={types} usernameHandler={usernameHandler} passwordHandler={passwordHandler}/>
    </form>
  )
}

export default SignInForm