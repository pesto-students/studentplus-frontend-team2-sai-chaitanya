import React from 'react';
import { Progress as AntdProgress } from 'antd';
import PropTypes from 'prop-types';

const Progress = ({ percent, size }) => {
  return <AntdProgress percent={percent} size={size} strokeColor="#6521FF" />;
};

Progress.propTypes = {
  percent: PropTypes.number,
  size: PropTypes.string,
};

Progress.defaultProps = {
  percent: 0,
  src: '../../../assets/logoWhite.png',
};

export default Progress;
