import React from 'react';
import styles from './listing.module.scss';

import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import {
  Label,
  Progress,
  Title,
  Row,
  Col,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';

const Listing = ({ title, description, status, link }) => {
  return (
    <div className={styles.listItem}>
      <Row gutter={8}>
        <Col span={16}>
          <Title level={5}>{title} </Title>
          <Label strong={false}>{description}</Label>
        </Col>
        <Col span={8}>
          <Title level={5}>{status} </Title>
        </Col>
      </Row>
    </div>
  );
};

Listing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  link: PropTypes.string,
};

Listing.defaultProps = {
  title: 'Title',
  description: ' ',
  status: '',
  link: 'link',
};

export default Listing;
