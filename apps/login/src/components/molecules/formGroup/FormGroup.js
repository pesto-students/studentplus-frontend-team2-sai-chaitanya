import React, { useState } from 'react';
import SubmitButton from '../../atoms/button'
import UsernameInput from '../../atoms/userInput'
import PasswordInput from '../../atoms/passwordInput'

const FormGroup = ({ classes, ids, labels, names, passwordHandler, types, usernameHandler }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleusernameCallback = (value) =>{
        setUsername(value);
        usernameHandler(value);
    }
    const handlepassowrdCallback = (value) =>{
        console.log('aagai');
        setPassword(value);
        passwordHandler(value);
    }
  return (
    <div className="formGroup">
        <UsernameInput classes={classes} id={ids.username} label={labels.username} name={names.username} type={types.username} parentCallback={handleusernameCallback}/>
        <PasswordInput classes={classes} id={ids.password} label={labels.password} name={names.password} type={types.password} parentCallback={handlepassowrdCallback}/>
        <SubmitButton value="Sign in" />
    </div>
  )
}

export default FormGroup