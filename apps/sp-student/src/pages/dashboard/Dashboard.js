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
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react';

const Dashboard = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(true);
  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `https://studentplus-backend.herokuapp.com/sapi/student/${authState.idToken.claims.studentid}`
      );
      return response.data;
    } catch (err) {
      console.log('Erro', err.message);
    }
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    getUserInfo().then(async (resp) => {
      try {
        const response = await axios.get(
          `https://studentplus-backend.herokuapp.com/capi/student-cohort/${resp.cohort}`
        );
        setEvents(response.data.events);
        setLoading(false);
      } catch (err) {
        console.log('Erro', err.message);
      }
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
