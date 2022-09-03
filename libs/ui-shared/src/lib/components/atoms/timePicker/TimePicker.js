import React from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import styles from './timePicker.module.scss';

const TimePicker = ({ style }) => {
  return <AntdTimePicker className={styles.timePicker} />;
};

export default TimePicker;
