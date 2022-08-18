import React from 'react';
import { Input as AntdInput } from 'antd';
import styles from './textarea.module.scss';
import { Label } from '../../typography';
import PropTypes from 'prop-types';

const Textarea = ({ bordered, className }) => {
  return (
    <AntdInput.TextArea bordered={bordered} className={styles[`${className}`]}>
      Textarea
    </AntdInput.TextArea>
  );
};

Textarea.propTypes = {
  bordered: PropTypes.bool,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  bordered: false,
  className: 'textarea',
};

export default Textarea;
