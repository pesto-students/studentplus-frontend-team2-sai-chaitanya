import React from 'react';
import styles from './logo.module.scss';
import PropTypes from 'prop-types';

const Logo = ({ src }) => {
  return (
    <div className={styles[`${className}`]}>
      <img src={src} />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

Logo.defaultProps = {
  className: 'logo',
  src: '../../../assets/logoWhite.png',
};
export default Logo;
