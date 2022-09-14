import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  StockOutlined,
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
  icon: <StockOutlined />,
  label: 'Statistics',
};

const DISCUSSIONS = {
  key: 'DISCUSSIONS',
  icon: <CommentOutlined />,
  label: 'Discussions',
};

const MENU_ITEMS = [
  DASHBOARD,
  PROFILE,
  DISCUSSIONS,
  RESOURCES,
  STATISTICS,
  ACCOUNT_SETTINGS,
];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;

export { DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
