import React from 'react';
import { Input as AntdInput } from 'antd';
import PropTypes from 'prop-types';

const InputGroup = ({ children, size }) => {
  return <AntdInput.Group size={size}>{children}</AntdInput.Group>;
};

InputGroup.propTypes = {
  children: PropTypes.bool,
  size: PropTypes.string,
};

InputGroup.defaultProps = {
  children: undefined,
  size: 'large',
};

export default InputGroup;
