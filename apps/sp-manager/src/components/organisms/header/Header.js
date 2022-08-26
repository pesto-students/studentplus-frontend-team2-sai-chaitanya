import React from 'react';
import {
  Logo,
  Title,
  ProfileDropdown,
} from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './header.module.scss';
import { PATHS } from '../../../constants';

const removeAllSlash = function (str) {
  return str.replace(/\//g, '');
};

const Header = () => {
  const path = removeAllSlash(window.location.pathname);
  let pageTitle = 'Dashboard';
  if (path != '') {
    pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
      </div>
      <div className={styles.headerRight}>
        <Title level={3}>{pageTitle}</Title>
        <ProfileDropdown paths={PATHS} />
      </div>
    </div>
  );
};

export default Header;
