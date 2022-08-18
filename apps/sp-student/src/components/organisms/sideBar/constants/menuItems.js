import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
  SettingOutlined,
} from '../../../../../../../libs/ui-shared/src/lib/components/atoms';

const ACCOUNT_SETTINGS = {
  key: 'ACCOUNT_SETTINGS',
  icon: <SettingOutlined />,
  label: 'Settings',
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

const RECENT_CHATBOARDS = {
  key: 'RECENT_CHATBOARDS',
  icon: <CommentOutlined />,
  label: 'Recent Chatboards',
};

const MENU_ITEMS = [DASHBOARD, PROFILE, RECENT_CHATBOARDS, ACCOUNT_SETTINGS];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;

export { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
