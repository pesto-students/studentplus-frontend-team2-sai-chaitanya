import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import styles from './button.module.scss';

const Button = ({ block = true, type, label, className, children }) => {
  return (
    <AntdButton
      htmlType={type}
      shape="round"
      size="large"
      block={block}
      className={styles[`${className}`]}
    >
      {label || children}
    </AntdButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: 'btn',
  type: 'button',
  label: null,
  onClick: _noop,
};

export default Button;
