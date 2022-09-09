import { Event } from '../../components';
import {
  ClockCircleFilled,
  Title,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.eventsCover}>
        <Title level={4}>Pesto Announcement Events</Title>
        <Event
          icon={<ClockCircleFilled />}
          date="27-07-2022 12:00PM"
          title="Introduction to Web3"
          excerpt="How To Get Started With Web3"
        />
        <Event
          icon={<ClockCircleFilled />}
          date="27-07-2022 12:00PM"
          title="Introduction to Web3"
          excerpt="How To Get Started With Web3"
        />
      </div>
      <div className={styles.eventsCover}>
        <Title level={4}>Cohort Announcement Events</Title>
        <Event
          icon={<ClockCircleFilled />}
          date="27-07-2022 12:00PM"
          title="Introduction to Web3"
          excerpt="How To Get Started With Web3"
        />
        <Event
          icon={<ClockCircleFilled />}
          date="27-07-2022 12:00PM"
          title="Introduction to Web3"
          excerpt="How To Get Started With Web3"
        />
      </div>
    </div>
  );
};

export default Dashboard;
