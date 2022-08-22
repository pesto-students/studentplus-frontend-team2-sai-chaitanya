import React from 'react';

import { Menu } from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './sideBar.module.scss';
import {
  DEFAULT_SELECTED_ITEM_KEY,
  DEFAULT_OPEN_ITEM_KEY,
  MENU_ITEMS,
} from './constants';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../constants';

function SideBar() {
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
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileSummary}></div>
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
        />
      </div>
      <div className={styles.settings}></div>
    </div>
  );
}

export default SideBar;
