import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { SideBar } from '../sideBar';
import styles from './appSkeleton.module.scss';
import { Layout, Grid } from 'antd';
import Header from '../header';
import { PATHS } from '../../../constants';
import { useHistory } from 'react-router-dom';
const { Content } = Layout;
const { useBreakpoint } = Grid;

function AppSkeleton({ children }) {
  const history = useHistory();
  const screens = useBreakpoint();

  const handleMenuItemClick = ({ key }) => {
    if (key === 'PROFILE') {
      history.push(PATHS.PROFILE);
    }
    if (key === 'DASHBOARD') {
      history.push(PATHS.DASHBOARD);
    }
    if (key === 'ACCOUNT_SETTINGS') {
      history.push(PATHS.ACCOUNT_SETTINGS);
    }
    if (key === 'LIVE_SESSION_CHAT') {
      history.push(PATHS.LIVE_SESSION_CHAT);
    }
    if (key === 'ASSIGNMENT') {
      history.push(PATHS.ASSIGNMENT);
    }
    if (key === 'STATISTICS') {
      history.push(PATHS.STATISTICS);
    }
	window.sessionStorage.setItem('currentPage', key);
  };
  useEffect(() => {
    const screen = Object.entries(screens)
      .filter((screen) => !!screen[1])
      .map((screen) => screen[0]);
    console.log('Screen: ', screen);
    if (
      screen.includes('md') ||
      screen.includes('lg') ||
      screen.includes('xl')
    ) {
      setCollapsed(false);
    }
  }, [screens]);

  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={styles.container}>
      <Layout>
        <SideBar
          collapsed={collapsed}
          onCollapse={setCollapsed}
          handleMenuItemClick={handleMenuItemClick}
        />
        <Layout className={styles.siteLayoutBackground}>
          <Header className={styles.siteHeaderBackground} />
          <Content>
            <div className={styles.children}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

AppSkeleton.propTypes = {};

AppSkeleton.defaultProps = {};

export default AppSkeleton;
