import React from 'react';
import styles from './logo.module.scss';
import PropTypes from 'prop-types';
import Image from '../image';
import IMAGE_PATHS from '../../../../../public/images/constants/';

const Logo = ({ src, className }) => {
  return (
    <div className={styles[`${className}`]}>
      <Image src={src} />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

Logo.defaultProps = {
  className: 'logo',
  src: IMAGE_PATHS.WHITE_LOGO,
};
export default Logo;
