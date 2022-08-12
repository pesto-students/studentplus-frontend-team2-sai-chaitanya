import React from 'react';
import { Card as AntdCard } from 'antd';

const Card = ({ children }) => {
  return (
    <AntdCard
      style={{ borderRadius: '25px', padding: '10px 20px', margin: '20px 0px' }}
      bodyStyle={{ padding: '0' }}
    >
      {children}
    </AntdCard>
  );
};

export default Card;
