import { Event } from '../../components';
import {
  ClockCircleFilled,
  InputGroup,
  Row,
  Col,
  Space,
  Title,
  Skeleton,
} from '../../../../../libs/ui-shared/src/lib/components/';
import styles from './dashboard.module.scss';
import { useEffect, useState } from 'react';
import { getUserInfo, getStudentCohorts } from '../../routes/serverCalls';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then((resp) => {
      getStudentCohorts(resp, setEvents, setLoading);
    });
  }, []);

  return (
    <div className={styles.dashboardContent}>
      <Space
        direction="vertical"
        size={20}
        style={{
          display: 'flex',
        }}
      >
        <div className={styles.eventsCover}>
          <Title level={4}>Pesto Announcement Events</Title>
          <InputGroup size="large">
            <Row gutter={8}>
              <Skeleton loading={loading} active>
                {events &&
                  events.map((Cevent, index) => {
                    return (
                      <Col span={12} xs={24} sm={12} md={12} lg={8} xl={6}>
                        <Event
                          key={index}
                          icon={<ClockCircleFilled />}
                          date={formatDate(Cevent.date)}
                          title={Cevent.event}
                          link={window.location.origin}
                        />
                      </Col>
                    );
                  })}
              </Skeleton>
            </Row>
          </InputGroup>
        </div>
        <div className={styles.eventsCover}>
          <Title level={4}>Cohort Announcement Events</Title>
          <InputGroup size="large">
            <Row gutter={8}>
              <Skeleton loading={loading} active>
                {events &&
                  events.map((Cevent, index) => {
                    return (
                      <Col span={12} xs={24} sm={12} md={12} lg={8} xl={6}>
                        <Event
                          key={index}
                          icon={<ClockCircleFilled />}
                          date={formatDate(Cevent.date)}
                          title={Cevent.event}
                          link={window.location.origin}
                        />
                      </Col>
                    );
                  })}
              </Skeleton>
            </Row>
          </InputGroup>
        </div>
      </Space>
    </div>
  );
};

export default Dashboard;
