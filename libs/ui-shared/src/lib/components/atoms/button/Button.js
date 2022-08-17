import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

// Components
import { Button as AntdButton } from 'antd';

// Helpers
import { getButtonClassName } from './helpers/button.general';

// Constants
import BUTTON_TYPES from './constants/button.types';
import BUTTON_SIZES from './constants/button.sizes';

const Button = (props) => {
  const {
    className,
    children,
    htmlType,
    label,
    type,
    onClickHandler,
    ...restProps
  } = props;
  const buttonClassName = getButtonClassName(className, type);
  return (
    <AntdButton
      {...restProps}
      type={type}
      htmlType={htmlType}
      className={buttonClassName}
      onClick={onClickHandler}
    >
      {label || children}
    </AntdButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  htmlType: PropTypes.string,
  onClickHandler: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  label: undefined,
  htmlType: 'button',
  onClickHandler: _noop,
  type: BUTTON_TYPES.PRIMARY,
  size: BUTTON_SIZES.MEDIUM,
};

export default Button;
