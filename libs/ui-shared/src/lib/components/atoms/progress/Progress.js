import React from 'react';
import { Progress as AntdProgress } from 'antd';
import PropTypes from 'prop-types';

const Progress = ({ percent, size, strokeColor }) => {
  return (
    <AntdProgress percent={percent} size={size} strokeColor={strokeColor} />
  );
};

Progress.propTypes = {
  percent: PropTypes.number,
  size: PropTypes.string,
  strokeColor: PropTypes.string,
};

Progress.defaultProps = {
  percent: 0,
  src: '../../../assets/logoWhite.png',
  strokeColor: '#6521FF',
};

export default Progress;
