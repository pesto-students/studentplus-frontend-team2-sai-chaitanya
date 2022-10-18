import React from 'react';
import {
  Card,
  Label,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/';
import styles from './event.module.scss';

const Event = ({ cardTitle, date, link, icon, title }) => {
  return (
    <div className={styles.event}>
      <Card title={cardTitle}>
        {icon}
        <Label>{date}</Label>
        <Title level={4}>{title}</Title>
        {/* <a href="#">{link}</a> */}
      </Card>
    </div>
  );
};

export default Event;
