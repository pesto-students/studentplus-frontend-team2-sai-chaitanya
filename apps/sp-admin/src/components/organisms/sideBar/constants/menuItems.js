import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
  TeamOutlined,
} from '../../../../../../../libs/ui-shared/src/lib/components/atoms';

const ACCOUNT_SETTINGS = {
  key: 'ACCOUNT_SETTINGS',
  icon: <SettingOutlined />,
  label: 'Settings',
};
const COHORT_CREATOR = {
  key: 'COHORT_CREATOR',
  icon: <TeamOutlined />,
  label: 'Cohot Creator',
};

const DASHBOARD = {
  key: 'DASHBOARD',
  icon: <DashboardOutlined />,
  label: 'Dashboard',
};

const PROFILE = {
  key: 'PROFILE',
  icon: <ProfileOutlined />,
  label: 'Profile',
};

const MENU_ITEMS = [DASHBOARD, PROFILE, COHORT_CREATOR, ACCOUNT_SETTINGS];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;

export { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
