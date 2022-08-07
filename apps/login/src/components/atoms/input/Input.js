import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ classes, id, label, name, parentCallback, type  }) => {
    const [inputValue, setInputValue] = useState('');
    const inputSize = classes.inputSize ? classes.inputSize : 'fullWidthInput';
    function onChangeHandler(e){
      setInputValue(e.target.value);
      parentCallback(e.target.value);
  }
  return (
    <div className="inputCover">
    <TextField id={id} label={label} name={name} onChange={onChangeHandler} type={type} size="small" InputProps={{
        className: inputSize,
    }} value={inputValue} required/>
    </div>
  )
}

Input.protoTypes = {
    classes : PropTypes.object,
    id : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    name : PropTypes.string,
    parentCallback : PropTypes.func,
    type : PropTypes.string.isRequired
}

Input.defaultProps = {
    classes : {},
    id : "",
    label : "",
    name : "",
    parentCallback : () => {},
    type : "text"
}

export default Input