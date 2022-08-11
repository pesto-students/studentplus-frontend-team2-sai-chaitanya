import React from 'react';
import { Avatar, Logo, Title } from '../../atoms';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
      </div>
      <div className={styles.headerRight}>
        <Title level={3}>PageTitle</Title>
        <Avatar size={32} src=""/>
      </div>
    </div>
  );
};

export default Header;
