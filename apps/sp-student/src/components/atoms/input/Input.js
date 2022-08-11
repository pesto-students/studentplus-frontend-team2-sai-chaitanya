import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import _noop from 'lodash/noop';
import styles from './Input.module.scss';

const Input = ({ onChange, placeholder, prefix, size, type, value }) => {
  return (
    <AntdInput
      type={type} 
      prefix={prefix}
      placeholder={placeholder}
      onChange={onChange}
      size={size}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: _noop,
  placeholder: '',
  type: '',
  value: '',
};

export default Input;
