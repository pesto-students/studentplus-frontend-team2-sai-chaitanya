import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  PieChartOutlined,
} from '../../../../../../../libs/ui-shared/src/lib/components/atoms';

const ACCOUNT_SETTINGS = {
  key: 'ACCOUNT_SETTINGS',
  icon: <SettingOutlined />,
  label: 'Settings',
};
const RESOURCES = {
  key: 'RESOURCES',
  icon: <FolderOpenOutlined />,
  label: 'Resources',
  children: [
    {
      key: 'ASSIGNMENT',
      label: 'Assignment',
    },
  ],
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
const STATISTICS = {
  key: 'STATISTICS',
  icon: <PieChartOutlined />,
  label: 'Statistics',
};

const RECENT_CHATBOARDS = {
  key: 'RECENT_CHATBOARDS',
  icon: <CommentOutlined />,
  label: 'Recent Chatboards',
  children: [
    {
      key: 'LIVE_SESSION_CHAT',
      label: 'Live Session Chat',
    },
  ],
};

const MENU_ITEMS = [
  DASHBOARD,
  PROFILE,
  RECENT_CHATBOARDS,
  RESOURCES,
  STATISTICS,
  ACCOUNT_SETTINGS,
];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;
const DEFAULT_OPEN_ITEM_KEY = RECENT_CHATBOARDS.key;

export { DEFAULT_SELECTED_ITEM_KEY, DEFAULT_OPEN_ITEM_KEY, MENU_ITEMS };
