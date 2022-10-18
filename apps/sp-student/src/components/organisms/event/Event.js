import React from 'react';
import {
  Button,
  Card,
  Label,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/';
import styles from './event.module.scss';

const Event = ({ cardTitle, date, icon, title }) => {
  return (
    <div className={styles.event}>
      <Card title={cardTitle}>
        {icon}
        <Label>{date}</Label>
        <Title level={4}>{title}</Title>
        {/* <Button type="link" href={title}>
          {title}
        </Button> */}
      </Card>
    </div>
  );
};

export default Event;
