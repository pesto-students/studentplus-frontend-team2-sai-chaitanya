import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import styles from './datePicker.module.scss';

const DatePicker = ({...props}) => {
  return <AntdDatePicker className={styles.datePicker} {...props}/>;
};

export default DatePicker;
