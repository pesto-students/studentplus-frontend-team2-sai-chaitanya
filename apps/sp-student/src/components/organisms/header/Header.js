import React from 'react';
import {Layout} from 'antd';
import {
  Title,
  ProfileDropdown,
} from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './header.module.scss';
import { PATHS } from '../../../constants';

const removeAllSlash = function (str) {
  return str.replace(/\//g, '');
};

const Header = ({...otherProps }) => {
  const path = removeAllSlash(window.location.pathname);
  let pageTitle = 'Dashboard';
  if (path != '') {
    pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
  }
  return (
    <Layout.Header {...otherProps}>
      <Title level={3} style={{
		marginBottom:"0",
		fontSize:"2rem"
	  }}>{pageTitle}</Title>
      <ProfileDropdown paths={PATHS} />
    </Layout.Header>
  );
};

export default Header;
