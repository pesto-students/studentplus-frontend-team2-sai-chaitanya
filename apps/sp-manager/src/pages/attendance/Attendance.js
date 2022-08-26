import {
  Card,
  Select,
  Button,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import UserGrid from '../../components/molecules/userGrid';
import styles from './attendance.module.scss';
import { COHORTS, COHORTUSERS } from './data/DATA';
const Attendance = () => {
  const COHORTUSERARR = Array.from(COHORTUSERS.DATA);
  const COHORTSARR = Array.from(COHORTS.DATA);
  function onClickAction() {}
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.gridHeader}>
          <div className={styles.selectionBar}>
            <Select
              defaultValue={COHORTSARR[0]}
              onChange={onClickAction}
              options={COHORTSARR}
            />
          </div>
          <div className ={styles.legend}> <div className = {styles.present}></div> Present</div>
          <div className ={styles.legend}> <div className = {styles.absent}></div>Absent</div>
          <div className ={styles.legend}> <div className = {styles.absentNotice}></div>Absent with Notice</div>
          <Button htmlType="button">View Cohort</Button>
        </div>
        <UserGrid
          cohort={COHORTUSERARR}
          onClickAction={onClickAction}
        ></UserGrid>
        <div className={styles.buttons}>
          <Button htmlType="button">Save</Button>
          <Button htmlType="button">Submit</Button>
          <Button htmlType="button" type="default">
            Clear
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Attendance;
