import React from 'react';
import { Input as AntdInput } from 'antd';

const InputGroup = ({ children, size }) => {
  return <AntdInput.Group size={size}>{children}</AntdInput.Group>;
};

export default InputGroup;
