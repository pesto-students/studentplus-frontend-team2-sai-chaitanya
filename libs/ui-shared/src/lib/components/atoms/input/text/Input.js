import PropTypes from 'prop-types';
import { Input as AntdInput } from 'antd';
import _noop from 'lodash/noop';
import styles from './text.module.scss';
import { Label } from '../../typography';

const Input = ({
  bordered,
  className,
  label,
  onChangeHandler,
  placeholder,
  prefix,
  size,
  type,
}) => {
  return (
    <AntdInput
      type={type}
      addonBefore={<Label>{label}</Label>}
      bordered={bordered}
      prefix={prefix}
      className={styles[`${className}`]}
      placeholder={placeholder}
      onChange={onChangeHandler}
      size={size}
    />
  );
};

Input.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  onChangeHandler: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
};

Input.defaultProps = {
  bordered: false,
  className: 'input',
  onChangeHandler: _noop,
  label: '',
  placeholder: '',
  prefix: undefined,
  type: 'text',
  size: 'large',
};

export default Input;
