import React from 'react';
import PropTypes from 'prop-types';
import { Card as AntdCard } from 'antd';
import styles from './card.module.scss';

const Card = ({ children, className, title }) => {
  return (
    <AntdCard className={styles[`${className}`]} title={title}>
      {children}
    </AntdCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  children: undefined,
  className: 'card',
  title: '',
};

export default Card;
