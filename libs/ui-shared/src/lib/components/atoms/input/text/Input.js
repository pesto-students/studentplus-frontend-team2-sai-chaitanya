import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import _noop from 'lodash/noop';
import styles from './text.module.scss';
import { Label } from '../../typography';

const Input = ({ className, onChange, placeholder, prefix, size, type }) => {
  return (
    <AntdInput
      type={type}
      prefix={prefix}
      className={styles[`${className}`]}
      placeholder={placeholder}
      onChange={onChange}
      size={size}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
};

Input.defaultProps = {
  className: 'input',
  onChange: _noop,
  label: '',
  placeholder: '',
  prefix: undefined,
  type: 'text',
  size: 'large',
};

export default Input;
