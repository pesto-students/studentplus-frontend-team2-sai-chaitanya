import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const PassowrdInput = ({ classes, id, label, name, parentCallback, type  }) => {
    const inputSize = classes.inputSize ? classes.inputSize : '';
    const [password, setPassword] = useState('');
    function onPasswordChangeHandlers(e){
      setPassword(e.target.value);
      parentCallback(e.target.value);
    }
  return (
    <div className="inputCover">
    <TextField id={id} label={label} name={name} onChange={onPasswordChangeHandlers} type={type} size="small" InputProps={{
        className: inputSize,
    }} value={password} required/>
    </div>
  )
}

PassowrdInput.protoTypes = {
    classes : PropTypes.object,
    id : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    name : PropTypes.string,
    OnChangeHandler : PropTypes.func.isRequired,
    type : PropTypes.string.isRequired
}

PassowrdInput.defaultProps = {
    classes : {},
    id : "",
    label : "",
    name : "",
    OnChangeHandler : () => {},
    type : "text"
}

export default PassowrdInput