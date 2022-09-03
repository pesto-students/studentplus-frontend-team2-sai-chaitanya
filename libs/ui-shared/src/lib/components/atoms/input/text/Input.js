import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import _noop from 'lodash/noop';
import styles from './text.module.scss';
import { Label } from '../../typography';
import { forwardRef } from 'react';

const Input = forwardRef((
  { className, disabled, onChange, placeholder, prefix, size, type, value, ...otherProps },
  ref
) => {
  return (
    <AntdInput
      type={type}
      prefix={prefix}
      className={styles[`${className}`]}
      placeholder={placeholder}
      onChange={onChange}
      size={size}
      disabled={disabled}
      value={value}
      ref={ref}
	  {...otherProps}
    />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  className: 'input',
  disabled: false,
  onChange: _noop,
  label: '',
  placeholder: '',
  prefix: undefined,
  type: 'text',
  size: 'large',
  value: '',
};

export default Input;
