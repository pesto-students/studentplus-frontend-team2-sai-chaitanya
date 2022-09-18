import { Event } from '../../components';
import {
  ClockCircleFilled,
  Button,
  Space,
  Skeleton,
} from '../../../../../libs/ui-shared/src/lib/components/';
import styles from './dashboard.module.scss';
import { useEffect, useState } from 'react';
import { getUserInfo, getStudentCohortEvents } from '../../routes/serverCalls';
import { useOktaAuth } from '@okta/okta-react';
import { List, Segmented } from 'antd';

const Dashboard = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [events, setEvents] = useState([]);
  const [addedEvents, setAddedEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initLoading, setinitLoading] = useState(true);
  const [page, setPage] = useState(0);
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // const getEvents = async (page) => {
  //   const user = await getUserInfo(authState.idToken.claims.studentid).then(
  //     (user) => {
  //       return user;
  //     }
  //   );
  //   const offset = page * 4;
  //   const until = page ? offset * 4 : 4;
  //   setPage(page + 1);
  //   const eves = await getStudentCohortEvents(user, offset, until).then(
  //     (events) => {
  //       return events;
  //     }
  //   );
  //   return eves;
  // };

  useEffect(() => {
    getEvents(page).then((eves) => {
      console.log('initEvents', eves.data);
      setinitLoading(false);
      setAddedEvents(eves.data);
      setEvents(eves.data);
    });
  }, []);

  const onLoadMore = async () => {
    setLoading(true);
    setEvents(
      addedEvents.concat({
        loading: true,
        date: '',
        event: '',
      })
    );
    getEvents(page).then((eves) => {
      const newEvents = addedEvents.concat(eves.data);
      setAddedEvents(newEvents);
      setEvents(newEvents);
      setLoading(false);
    });
  };
  const onSegmentChange = (value) => {
    console.log('Segment', value);
	setinitLoading(true);
    getEvents(0).then((eves) => {
      setAddedEvents(eves.data);
      setEvents(eves.data);
      setinitLoading(false);
    });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClickHandler={onLoadMore}>Load more</Button>
      </div>
    ) : null;

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
          <Space
            direction="vertical"
            size={20}
            style={{
              width: '100%',
            }}
          >
            <Segmented
              options={[
                {
                  label: 'Pesto Events',
                  value: 'pesto',
                },
                {
                  label: 'Cohort Events',
                  value: 'cohort',
                },
              ]}
              onChange={onSegmentChange}
              block
              size="large"
            />
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={events}
              renderItem={(item) => (
                <List.Item>
                  <Skeleton
                    loading={item.loading ? item.loading : false}
                    active
                  >
                    <Event
                      icon={<ClockCircleFilled />}
                      date={formatDate(item.date)}
                      title={item.event}
                      link={window.location.origin}
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Dashboard;
