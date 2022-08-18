import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import {
  Card,
  ClockCircleFilled,
  Label,
  Title,
} from '../../../../../libs/ui-shared/src/lib/components';

const Dashboard = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const logoutHandler = () => oktaAuth.signOut('/');

  if (!authState || !authState.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <Title level={4}>Pesto Announcement Events</Title>
      <Card>
        <p>
          <ClockCircleFilled />
          <Label>27-07-2022 12:00PM</Label>
        </p>
        <p>
          <Title level={5}>Introduction to Web3</Title>
        </p>
        <p>
          <Label>How To Get Started With Web3</Label>
        </p>
      </Card>
      <Card>
        <p>
          <ClockCircleFilled />
          <Label>27-07-2022 12:00PM</Label>
        </p>
        <p>
          <Title level={5}>Introduction to Web3</Title>
        </p>
        <p>
          <Label>How To Get Started With Web3</Label>
        </p>
      </Card>
      <Title level={4}>Cohort Events</Title>
      <Card>
        <p>
          <ClockCircleFilled />
          <Label>27-07-2022 12:00PM</Label>
        </p>
        <p>
          <Title level={5}>Introduction to Web3</Title>
        </p>
        <p>
          <Label>How To Get Started With Web3</Label>
        </p>
      </Card>
      <Card>
        <p>
          <ClockCircleFilled />
          <Label>27-07-2022 12:00PM</Label>
        </p>
        <p>
          <Title level={5}>Introduction to Web3</Title>
        </p>
        <p>
          <Label>How To Get Started With Web3</Label>
        </p>
      </Card>
    </div>
  );
};

export default Dashboard;
