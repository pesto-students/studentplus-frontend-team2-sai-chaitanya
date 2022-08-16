import React from 'react';

import { Menu } from '../../atoms';
import styles from './sideBar.module.scss';
import { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS } from './constants';
import { useHistory } from 'react-router-dom';
import {PATHS} from '../../../constants'
function SideBar() {
  const history = useHistory();
  const handleMenuItemClick = ({ key }) => {
    if (key === 'PROFILE') {
      history.push(`${PATHS.PROFILE}`);
    }
    if (key === 'DASHBOARD') {
      history.push(`${PATHS.DASHBOARD}`);
    }
    if (key === 'ACCOUNT_SETTINGS') {
      history.push(`${PATHS.ACCOUNT_SETTINGS}`);
    }
    if (key === 'EVENT_MANAGER') {
      history.push(`${PATHS.EVENT_MANAGER}`);
    }
    if (key === 'COHORT_MANAGER') {
      history.push(`${PATHS.COHORT_MANAGER}`);
    }
    if (key === 'ATTENDANCE') {
      history.push(`${PATHS.ATTENDANCE}`);
    }
    if (key === 'STATISTICS') {
      history.push(`${PATHS.STATISTICS}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileSummary}></div>
      <div className={styles.menu}>
        <Menu
          defaultSelectedKeys={[DEFAULT_SELECTED_ITEM_KEY]}
          items={MENU_ITEMS}
          onClick={handleMenuItemClick}
          style={{
            borderRight: 'none',
          }}
        />
      </div>
      <div className={styles.settings}></div>
    </div>
  );
}

export default SideBar;
