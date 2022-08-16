import React from 'react';
import { Card as AntdCard } from 'antd';
import styles from './card.module.scss';

const Card = ({ children, className, title }) => {
  return (
    <AntdCard
      className={[styles.card, className]}
      bodyStyle={{ padding: '0' }}
      title={title}
    >
      {children}
    </AntdCard>
  );
};

export default Card;
