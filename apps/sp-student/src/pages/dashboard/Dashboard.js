import { Event } from '../../components';
import {
  ClockCircleFilled,
  Title,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './dashboard.module.scss';

const pestoAnnouncmentEvents = [
  {
    date: '07-09-2022 12:00PM',
    title: 'Introduction to Web3',
    excerpt: 'How To Get Started With Web3',
  },
  {
    date: '10-09-2022 12:00PM',
    title: 'Introduction to Web3',
    excerpt: 'How To Get Started With Web3',
  },
  {
    date: '15-09-2022 12:00PM',
    title: 'Introduction to Web3',
    excerpt: 'How To Get Started With Web3',
  },
];
const pestoCohortEvents = [
  {
    date: '07-09-2022 12:00PM',
    title: 'Introduction to Web3',
    excerpt: 'How To Get Started With Web3',
  },
  {
    date: '27-09-2022 12:00PM',
    title: 'Introduction to Web3',
    excerpt: 'How To Get Started With Web3',
  },
];

const Dashboard = () => {
  const pestoAevents = pestoAnnouncmentEvents.map((Aevent, index) => {
    return <Event
      key={index}
      icon={<ClockCircleFilled />}
      date={Aevent.date}
      title={Aevent.title}
      excerpt={Aevent.excerpt}
    />;
  });
  const pestoCevents = pestoCohortEvents.map((Cevent, index) => {
    return <Event
      key={index}
      icon={<ClockCircleFilled />}
      date={Cevent.date}
      title={Cevent.title}
      excerpt={Cevent.excerpt}
    />;
  });
  console.log(pestoCevents);
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.eventsCover}>
        <Title level={4}>Pesto Announcement Events</Title>
        {pestoAevents}
      </div>
      <div className={styles.eventsCover}>
        <Title level={4}>Cohort Announcement Events</Title>
        {pestoCevents}
      </div>
    </div>
  );
};

export default Dashboard;
