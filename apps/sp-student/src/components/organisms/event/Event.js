import React from 'react';
import { Card, Label, Title } from '../../atoms';
import styles from './event.module.scss';

const Event = ({ excerpt, date, icon, title }) => {
  return (
    <div className={styles.event}>
      <Card className={styles.eventCard}>
        {icon}
        <Label>{date}</Label>
        <Title level={5}>{title}</Title>
        <Label>{excerpt}</Label>
      </Card>
    </div>
  );
};

export default Event;
