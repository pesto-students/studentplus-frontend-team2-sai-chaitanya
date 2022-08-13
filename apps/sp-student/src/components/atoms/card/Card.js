import React from 'react';
import { Card as AntdCard } from 'antd';

const Card = ({ children, className, title }) => {
  return (
    <AntdCard className={className} bodyStyle={{ padding: '0' }} title={title}>
      {children}
    </AntdCard>
  );
};

export default Card;
