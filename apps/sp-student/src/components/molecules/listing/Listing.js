import React from 'react';
import styles from './listing.module.scss';
import { Row, Col } from 'antd';
import {
  Button,
  Label,
  Progress,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import PropTypes from 'prop-types';

const Listing = ({ excerpt, percent, title, type, link }) => {
  return (
    <div className={styles.listItem}>
      <Row gutter={8}>
        <Col span={16}>
          <Title level={5}>{title}</Title>
          <Label strong={false}>{excerpt}</Label>
        </Col>
        <Col span={8}>
          {type == 'progress' ? (
            <Progress percent={percent} size="small" />
          ) : (
            <Button>View</Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

Listing.propTypes = {
  excerpt: PropTypes.string,
  percent: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
};

Listing.defaultProps = {
  excerpt: '',
  percent: 0,
  title: '',
  type: 'progress',
  link: '',
};

export default Listing;
