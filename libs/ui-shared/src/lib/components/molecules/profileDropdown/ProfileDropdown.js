import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Avatar, Dropdown, Menu } from '../../atoms';
import { MENU_ITEMS } from './constants';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getUserInfo,
} from '../../../../../../../apps/sp-student/src/routes/serverCalls';
const ProfileDropdown = ({ paths }) => {
  const [avatar, setAvatar] = useState(false);
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();
  const [activeMenu, setActiveMenu] = useState();
  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then((resp) => {
      setAvatar(resp.img);
    });
  }, []);
  const handleMenuItemClick = ({ key }) => {
    if (key === 'LOGOUT') {
      logoutHandler();
    }
    if (key === 'PROFILE') {
      history.push(paths.PROFILE);
    }
    if (key === 'DASHBOARD') {
      history.push(paths.DASHBOARD);
    }
    setActiveMenu(key);
    console.log(key);
    console.log(activeMenu);
  };

  const logoutHandler = () => oktaAuth.signOut('/');
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
