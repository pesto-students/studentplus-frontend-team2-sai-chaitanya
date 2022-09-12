import React, { useEffect, useState } from 'react';

import { Menu, Logo } from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './sideBar.module.scss';
import {
  DEFAULT_SELECTED_ITEM_KEY,
  DEFAULT_OPEN_ITEM_KEY,
  MENU_ITEMS,
} from './constants';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../constants';
import {Layout} from 'antd';
import IMAGE_PATHS from '../../../../../../libs/ui-shared/public/images/constants';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Sider } = Layout;

function SideBar({ collapsed, onCollapse }) {
  const [logo, setLogo] = useState(IMAGE_PATHS.WHITE_LOGO);
  const history = useHistory();
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
  };
  useEffect(() => {
    collapsed
      ? setLogo(IMAGE_PATHS.WHITE_LOGO_ICON)
      : setLogo(IMAGE_PATHS.WHITE_LOGO);
  }, [collapsed]);
  return (
    <Sider
      breakpoint="lg"
      className={styles.sidebar}
      collapsed={collapsed}
      onCollapse={(value) => onCollapse(value)}
      collapsedWidth={0}
      theme="light"
      width="288px"
    >
      <Logo src={logo} />
      <div className={styles.menu}>
        <Menu
          defaultSelectedKeys={[DEFAULT_SELECTED_ITEM_KEY]}
          defaultOpenKeys={[DEFAULT_OPEN_ITEM_KEY]}
          items={MENU_ITEMS}
          onClick={handleMenuItemClick}
          style={{
            borderRight: 'none',
          }}
          mode="inline"
          inlineIndent={16}
        />
      </div>
    </Sider>
  );
}

export default SideBar;
