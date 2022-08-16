import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import styles from './button.module.scss';

const Button = ({
  block,
  className,
  htmlType,
  label,
  onClickHandler,
  shape,
  size,
}) => {
  return (
    <AntdButton
      htmlType={htmlType}
      shape={shape}
      size={size}
      block={block}
      className={styles[`${className}`]}
      onClick={onClickHandler}
    >
      {label}
    </AntdButton>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  htmlType: PropTypes.string,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  shape: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  block: true,
  className: 'btn',
  htmlType: 'submit',
  label: 'Save',
  onClickHandler: _noop,
  shape: 'round',
  size: 'large',
};

export default Button;
