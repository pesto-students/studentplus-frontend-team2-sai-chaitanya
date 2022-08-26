import React from 'react';
import Card from 'libs/ui-shared/src/lib/components/atoms/card';
import UserBox from 'libs/ui-shared/src/lib/components/atoms/userBox';
import styles from './userGrid.module.scss';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

function UserGrid({ cohort, onClickAction }) {
  console.log(cohort);
  const cohortArr = Array.from(cohort);
  console.log(cohortArr);
  return (
    <Card><div className={styles.gridContainer}>
      {cohortArr.map((user) => (
        <UserBox
          key={user.key}
          userName={user.userName}
          onClick={onClickAction}
        />
      ))}
    </div>
    </Card>
  );
}

UserGrid.propTypes = {
  cohort: PropTypes.array,
  onClickAction: PropTypes.func,
};

UserGrid.defaultProps = {
  userName: [],
  onClickAction: _noop,
};

export default UserGrid;
