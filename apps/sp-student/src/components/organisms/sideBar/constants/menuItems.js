import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
} from '../../../atoms';

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

const MENU_ITEMS = [DASHBOARD, PROFILE, RECENT_CHATBOARDS];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;

export { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
