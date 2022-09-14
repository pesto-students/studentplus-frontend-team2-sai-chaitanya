import React from 'react';
import { Layout } from 'antd';
import {
  Title,
  ProfileDropdown,
} from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './header.module.scss';
import { PATHS } from '../../../constants';
import { DEFAULT_SELECTED_ITEM_KEY } from '../sideBar/constants';

const removeAllSlash = function (str) {
  return str.replace(/\//g, '');
};

const Header = ({ ...otherProps }) => {
  const currentPage = window.sessionStorage.getItem('currentPage');
  return (
    <Layout.Header {...otherProps}>
      <Title
        level={3}
        style={{
          marginBottom: '0',
          fontSize: '2rem',
        }}
      >
        {currentPage ? currentPage.replaceAll('_', ' ') : DEFAULT_SELECTED_ITEM_KEY}
      </Title>
      <ProfileDropdown paths={PATHS} />
    </Layout.Header>
  );
};

export default Header;
