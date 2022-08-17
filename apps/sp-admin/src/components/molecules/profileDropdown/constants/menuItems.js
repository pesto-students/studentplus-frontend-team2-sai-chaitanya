import {
  DashboardOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '../../../../../../../libs/ui-shared/src/lib/components/atoms';

const DASHBOARD = {
  key: 'DASHBOARD',
  icon: <DashboardOutlined />,
  label: 'Dashboard',
};
const LOGOUT = {
  key: 'LOGOUT',
  icon: <LogoutOutlined />,
  label: 'Logout',
};
const PROFILE = {
  key: 'PROFILE',
  icon: <ProfileOutlined />,
  label: 'Profile',
};

const MENU_ITEMS = [DASHBOARD, PROFILE, LOGOUT];

export { MENU_ITEMS };
