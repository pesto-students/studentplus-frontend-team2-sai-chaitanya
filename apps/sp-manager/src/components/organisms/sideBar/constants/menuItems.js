import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
  SettingOutlined,
  CalendarOutlined,
  TeamOutlined,
  CheckOutlined,
  StockOutlined,
} from '../../../atoms';

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

const EVENT_EDITOR = {
  key: 'EVENT_EDITOR',
  icon: <CalendarOutlined />,
  label: 'Events Editor',
};

const COHORT_MANAGER = {
  key: 'COHORT_MANAGER',
  icon: <TeamOutlined />,
  label: 'Cohort Manager',
};

const ATTENDANCE = {
  key: 'ATTENDANCE',
  icon: <CheckOutlined />,
  label: 'Attendance',
};

const STATISTICS = {
  key: 'STATISTICS',
  icon: <StockOutlined />,
  label: 'Statistics',
};

const MENU_ITEMS = [
  ATTENDANCE,
  COHORT_MANAGER,
  DASHBOARD,
  EVENT_EDITOR,
  PROFILE,
  RECENT_CHATBOARDS,
  ACCOUNT_SETTINGS,
  STATISTICS,
];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;

export { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
