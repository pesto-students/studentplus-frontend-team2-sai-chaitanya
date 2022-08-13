import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { ClockCircleFilled, Event, Label, Title } from '../../components';

const Dashboard = () => {
  return (
    <>
      <Title level={4}>Pesto Announcement Events</Title>
      <Event
        icon={<ClockCircleFilled />}
        date="27-07-2022 12:00PM"
        title="Introduction to Web3"
        excerpt="How To Get Started With Web3"
      />
    </>
  );
};

export default Dashboard;
