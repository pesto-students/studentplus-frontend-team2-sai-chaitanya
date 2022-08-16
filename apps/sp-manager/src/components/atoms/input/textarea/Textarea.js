import React from 'react';
import { Input as AntdInput } from 'antd';
import styles from './textarea.module.scss';
import { Label } from '../../typography';

const Textarea = ({ label }) => {
  return (
    <AntdInput.TextArea bordered={false} className={styles.textarea}>
      Textarea
    </AntdInput.TextArea>
  );
};

export default Textarea;
