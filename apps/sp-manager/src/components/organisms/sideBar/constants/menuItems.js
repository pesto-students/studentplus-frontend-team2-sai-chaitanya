import {
  DashboardOutlined,
  ProfileOutlined,
  CommentOutlined,
  SettingOutlined,
  CalendarOutlined,
  TeamOutlined,
  CheckOutlined,
  StockOutlined,
  FolderOpenOutlined
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
const CHATBOARD_EDITOR = {
  key: 'DISCUSSION_EDITOR',
  icon: <CommentOutlined />,
  label: 'Discussion Editor',
};
const ASSIGNMENT_EDITOR = {
  key: 'ASSIGNMENT_EDITOR',
  icon: <CommentOutlined />,
  label: 'Assignment Editor',
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
const RESOURCES = {
  key: 'RESOURCES',
  icon: <FolderOpenOutlined />,
  label: 'Resources',
  children: [
    {
      key: 'ASSIGNMENT',
      label: 'Assignment',
    },
    {
      key: 'CHATBOARDS',
      label: 'Chatboards',
    },
  ],
};

const MENU_ITEMS = [
  ATTENDANCE,
  ASSIGNMENT_EDITOR,
  COHORT_MANAGER,
  DASHBOARD,
  EVENT_EDITOR,
  PROFILE,
  CHATBOARD_EDITOR,
  ACCOUNT_SETTINGS,
  RESOURCES,
  STATISTICS,
];
const DEFAULT_SELECTED_ITEM_KEY = DASHBOARD.key;
const DEFAULT_OPEN_ITEM_KEY = RESOURCES.key;
export { DEFAULT_OPEN_ITEM_KEY, DEFAULT_SELECTED_ITEM_KEY, MENU_ITEMS };
