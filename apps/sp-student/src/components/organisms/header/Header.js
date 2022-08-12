import React from 'react';
import { Logo, Title } from '../../atoms';
import { ProfileDropdown } from '../../molecules';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
      </div>
      <div className={styles.headerRight}>
        <Title level={3}>PageTitle</Title>
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
