import React from 'react'
import { DatePicker } from 'antd';

const RangePicker = ({...props}) => {
  return <DatePicker.RangePicker {...props} />;
}

export default RangePicker