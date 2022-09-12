import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { SideBar } from '../sideBar';
import styles from './appSkeleton.module.scss';
import { Layout, Grid } from 'antd';
import Header from '../header';
const { Content } = Layout;
const { useBreakpoint } = Grid;

function AppSkeleton({ children }) {
	const screens = useBreakpoint();
	  useEffect(() => {
		    const screen = Object.entries(screens)
          .filter((screen) => !!screen[1])
          .map((screen) => screen[0]);
		  console.log("Screen: ", screen);
		if (screen.includes('md') || screen.includes('lg') || screen.includes('xl')) {
      setCollapsed(false);
    }
	  }, [screens]);

  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={styles.container}>
      <Layout>
        <SideBar collapsed={collapsed} onCollapse={setCollapsed} />
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
