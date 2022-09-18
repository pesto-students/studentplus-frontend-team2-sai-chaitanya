import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Layout } from 'antd';
import {
  Title,
  ProfileDropdown,
} from '../../../../../../libs/ui-shared/src/lib/components';
import styles from './header.module.scss';

import { PATHS } from '../../../constants';
import { DEFAULT_SELECTED_ITEM_KEY } from '../sideBar/constants';
import {
  getUserInfo,
} from '../../../routes/serverCalls';

const Header = ({ ...otherProps }) => {
  const [avatar, setAvatar] = useState(false);
  const { oktaAuth, authState } = useOktaAuth();

  const currentPage = window.sessionStorage.getItem('currentPage');
  const signOut = ()=>{
	oktaAuth.signOut('/');
  }
  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then((resp) => {
      setAvatar(resp.img);
    });
  }, []);
  return (
    <Layout.Header {...otherProps}>
      <Title
        level={3}
        style={{
          marginBottom: '0',
          fontSize: '2rem',
        }}
      >
        {currentPage
          ? currentPage.replaceAll('_', ' ')
          : DEFAULT_SELECTED_ITEM_KEY}
      </Title>
      <ProfileDropdown paths={PATHS} avatar={avatar} signOut={signOut} />
    </Layout.Header>
  );
};

export default Header;
