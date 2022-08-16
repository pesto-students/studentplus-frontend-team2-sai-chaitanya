import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import _noop from 'lodash/noop';
import styles from './text.module.scss';
import { Label } from '../../typography';

const Input = ({ label, onChange, placeholder, prefix, size, type, value }) => {
  return (
    <AntdInput
      type={type}
      addonBefore={<Label>{label}</Label>}
      bordered={false}
      prefix={prefix}
      className={styles.input}
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
