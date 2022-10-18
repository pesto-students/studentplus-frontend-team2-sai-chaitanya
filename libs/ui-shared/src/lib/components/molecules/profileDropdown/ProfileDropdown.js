import React, { useState } from 'react';
import { Avatar, Dropdown, Menu } from '../../atoms';
import { MENU_ITEMS } from './constants';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProfileDropdown = ({ paths, avatar, signOut }) => {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState();
  const handleMenuItemClick = ({ key }) => {
    if (key === 'LOGOUT') {
      signOut();
    }
    if (key === 'PROFILE') {
      history.push(paths.PROFILE);
    }
    if (key === 'DASHBOARD') {
      history.push(paths.DASHBOARD);
    }
    setActiveMenu(key);
 };
 console.log("avatar",avatar);

  return (
    <Dropdown
      overlay={
        <Menu
          defaultSelectedKeys={[activeMenu]}
          items={MENU_ITEMS}
          onClick={handleMenuItemClick}
        />
      }
      trigger={['click']}
      arrow={true}
      placement="bottomRight"
    >
      <Avatar
        size={40}
        src={avatar ? avatar : ''}
        onClick={(e) => e.preventDefault()}
        style={{ display: 'block', marginLeft: 'auto' }}
      />
    </Dropdown>
  );
};

ProfileDropdown.propTypes = {
  paths: PropTypes.object,
};
ProfileDropdown.defaultProps = {
  paths: {},
};

export default ProfileDropdown;
