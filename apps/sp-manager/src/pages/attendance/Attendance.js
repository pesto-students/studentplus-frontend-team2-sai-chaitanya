import { useState, useEffect } from 'react';
import {
  Card,
  Select,
  Option,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import AttendanceTable from '../../components/molecules/attendanceTable';
import styles from './attendance.module.scss';
import { COHORTS, COHORTUSERS, EVENTS } from './data/DATA';
const Attendance = () => {
  let COHORTUSERARR = Array.from(COHORTUSERS.DATA);
  const COHORTSARR = Array.from(COHORTS.DATA);
  const EVENTSARR = Array.from(EVENTS.DATA);
  const [data, setData] = useState(COHORTUSERARR);
  const [cohort, setCohort] = useState(COHORTSARR[0]);
  const [event, setEvent] = useState(EVENTSARR[0]);
  function onChangeAction(record) {
    setData((pre) => {
      return pre.map((user) => {
        if (user.key === record.key) return { ...user, status: record.status };
        else return user;
      });
    });
  }
  useEffect(() => {
    console.log(cohort, event);
    //Add call to fetch cohort data from database
  }, [cohort, event]);

  useEffect(() => {
    let pushData = new Array(COHORTUSERARR.length);
    for (let i = 0; i < COHORTUSERARR.length; i++) {
      pushData[i] = data[i];
      pushData[i]['Event'] = event;
    }
    console.log(pushData);
    //Push updated data
  }, [data]);

  function onCohortChange(value) {
    setCohort(value);
  }
  function onEventChange(value) {
    setEvent(value);
  }
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.gridHeader}>
          <div className={styles.selectionBar}>
            <Select
              defaultValue={COHORTSARR[0]}
              onChange={onCohortChange}
              // options={COHORTSARR}
            >
              {
                COHORTSARR.map((cohort)=>{
                  return (
                    <Option key={cohort._id} value={cohort._id}>
                      {cohort.cohortID}
                    </Option>
                  )
                })
              }
            </Select>
          </div>
          <div className={styles.selectionBar}>
            <Select
              defaultValue={EVENTSARR[0]}
              onChange={onEventChange}
              // options={EVENTSARR}
              >
              {
                EVENTSARR.map((event)=>{
                  return (
                    <Option key={event._id} value={event._id}>
                      {event.title}
                    </Option>
                  )
                })
              }
            </Select>
          </div>
        </div>
        <AttendanceTable
          data={data}
          onChangeAction={onChangeAction}
        ></AttendanceTable>
      </div>
    </Card>
  );
};

export default Attendance;
