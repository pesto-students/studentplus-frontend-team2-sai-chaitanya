import {
  Card,
  Select,
  Button,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import UserGrid from '../../components/molecules/userGrid';
import styles from './cohortManager.module.scss';
import { COHORTS, COHORTUSERS } from './data/DATA';
const CohortManager = () => {
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
          <div className={styles.legend}>
            {' '}
            <div className={styles.active}></div> Active
          </div>
          <div className={styles.legend}>
            {' '}
            <div className={styles.deferred}></div>Deferred
          </div>
          <div className={styles.legend}>
            {' '}
            <div className={styles.deferNotice}></div>Deferment Requested
          </div>
          <Button htmlType="button">View Cohort</Button>
        </div>
        <UserGrid
          cohort={COHORTUSERARR}
          onClickAction={onClickAction}
        ></UserGrid>
        <div className={styles.buttons}>
          <Button htmlType="button">Submit</Button>
        </div>
      </div>
    </Card>
  );
};

export default CohortManager;
