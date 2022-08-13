import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Avatar, Dropdown, Menu } from '../../atoms';
import { MENU_ITEMS } from './constants';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../constants';

const ProfileDropdown = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();
  const [activeMenu, setActiveMenu] = useState();
  const handleMenuItemClick = ({ key }) => {
    if (key === 'LOGOUT') {
      logoutHandler();
    }
    if (key === 'PROFILE') {
      history.push(`/${PATHS.PROFILE}`);
    }
    if (key === 'DASHBOARD') {
      history.push('/');
    }
    setActiveMenu(key);
    console.log(key);
    console.log(activeMenu);
  };

  const logoutHandler = () => oktaAuth.signOut('/');
  return (
    <Dropdown
      menu={
        <Menu
          defaultSelectedKeys={[activeMenu]}
          items={MENU_ITEMS}
          onClick={handleMenuItemClick}
        />
      }
      targetElement={<Avatar size={40} />}
    />
  );
};

export default ProfileDropdown;
