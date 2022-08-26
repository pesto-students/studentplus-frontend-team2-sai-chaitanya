import React from 'react';
import { Input as AntdInput } from 'antd';
import styles from './textarea.module.scss';
import PropTypes from 'prop-types';

const Textarea = ({ bordered, className, placeHolder }) => {
  return (
    <AntdInput.TextArea bordered={bordered} className={styles[`${className}`]} placeholder={placeHolder}>
      Textarea
    </AntdInput.TextArea>
  );
};

Textarea.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
  placeHolder: PropTypes.string,
};

Textarea.defaultProps = {
  bordered: false,
  className: 'textarea',
  placeHolder: 'Add Description'
};

export default Textarea;
