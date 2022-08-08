import React from "react";
import PropTypes from "prop-types";

// Components
import { Input as AntdInput } from "antd";

// Constants
import SIZES from "./constants/input.sizes";
import TYPES from "./constants/input.types";

const Input = ({classes, id, label, name, onChangeCallback, size, type}) => {
  //const { type, size, placeholder, ...restProps } = props;
  function onChangeHandler(e){
    onChangeCallback(e.target.value);
  }
  return (
    <AntdInput
    id={id} label={label} name={name} onChange={onChangeHandler} type={type} size={size}
    />
  );
};

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


export default Input;
