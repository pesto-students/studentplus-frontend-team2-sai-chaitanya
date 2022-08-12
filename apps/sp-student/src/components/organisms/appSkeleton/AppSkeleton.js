import React from 'react';
import PropTypes from 'prop-types';

import { SideBar } from '../sideBar';
import styles from './appSkeleton.module.scss';
import Header from '../header';

function AppSkeleton({ children }) {
  console.log(children);
  return (
    <div className={styles.container}>
      <nav className={styles.header}>
        <Header />
      </nav>
      <div className={styles.content}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}

AppSkeleton.propTypes = {};

AppSkeleton.defaultProps = {};

export default AppSkeleton;
