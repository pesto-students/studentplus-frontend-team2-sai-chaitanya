import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import './userInput.css';

const UsernameInput = ({ classes, id, label, name, parentCallback, type  }) => {
    const [username, setUsername] = useState('');
    const inputSize = classes.inputSize ? classes.inputSize : 'fullWidthInput';
    function onUsernameChangeHandlers(e){
      console.log('typed');
      setUsername(e.target.value);
      parentCallback(e.target.value);
  }
  return (
    <div className="inputCover">
    <TextField id={id} label={label} name={name} onChange={onUsernameChangeHandlers} type={type} size="small" InputProps={{
        className: inputSize,
    }} value={username} required/>
    </div>
  )
}

UsernameInput.protoTypes = {
    classes : PropTypes.object,
    id : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    name : PropTypes.string,
    OnChangeHandler : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired
}

UsernameInput.defaultProps = {
    classes : {},
    id : "",
    label : "",
    name : "",
    OnChangeHandler : () => {},
    type : "text"
}

export default UsernameInput