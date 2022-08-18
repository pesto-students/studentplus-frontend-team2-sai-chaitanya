import React from 'react';
import styles from './listing.module.scss';
import { Row, Col } from 'antd';
import {
  Label,
  Progress,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';

const Listing = ({ percent }) => {
  return (
    <div className={styles.listItem}>
      <Row gutter={8}>
        <Col span={16}>
          <Title level={5}>Introduction to Web3 </Title>
          <Label strong={false}>How To Get Started With Web3</Label>
        </Col>
        <Col span={8}>
          <Progress percent={percent} size="small" />
        </Col>
      </Row>
    </div>
  );
};

export default Listing;
