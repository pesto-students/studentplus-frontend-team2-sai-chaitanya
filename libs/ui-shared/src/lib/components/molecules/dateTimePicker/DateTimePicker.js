import React from 'react'
import { DatePicker, TimePicker } from '../../atoms'
import styles from './dateTimePicker.module.scss';
const DateTimePicker = () => {
  return (
    <div className={styles.pickerCover}>
      <DatePicker />
      <TimePicker />
    </div>
  );
}

export default DateTimePicker