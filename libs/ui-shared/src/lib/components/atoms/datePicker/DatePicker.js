import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import styles from './datePicker.module.scss';
import PropTypes from 'prop-types';

const DatePicker = ({ style }) => {
  return <AntdDatePicker style={style} />;
};

DatePicker.propTypes = {
  style: PropTypes.object,
};

DatePicker.defaultProps = {
  style: {
    display: 'block',
    padding: 8,
    border: '1px solid #b9b6b6',
    borderRadius: '2rem',
    margin: '10px',
    marginBottom: '2rem !important',
    fontSize: 'small',
  },
};

export default DatePicker;
