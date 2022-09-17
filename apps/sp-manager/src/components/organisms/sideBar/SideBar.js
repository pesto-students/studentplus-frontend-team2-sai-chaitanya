import React, { useEffect, useState } from 'react';

import {
  Menu,
  Logo,
} from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './sideBar.module.scss';
import {
  DEFAULT_SELECTED_ITEM_KEY,
  MENU_ITEMS,
} from './constants';
import { Layout } from 'antd';
import IMAGE_PATHS from '../../../../../../libs/ui-shared/public/images/constants';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Sider } = Layout;

function SideBar({ collapsed, onCollapse, handleMenuItemClick }) {
  const currentPage = window.sessionStorage.getItem('currentPage');
  const [logo, setLogo] = useState(IMAGE_PATHS.WHITE_LOGO_MA);
  useEffect(() => {
    collapsed
      ? setLogo(IMAGE_PATHS.WHITE_LOGO_ICON)
      : setLogo(IMAGE_PATHS.WHITE_LOGO_MA);
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
          selectedKeys={currentPage ? currentPage : DEFAULT_SELECTED_ITEM_KEY}
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
