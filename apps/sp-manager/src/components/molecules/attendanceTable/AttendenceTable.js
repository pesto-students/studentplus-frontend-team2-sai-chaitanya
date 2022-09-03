import PropTypes from 'prop-types';
import { _noop } from 'lodash';

import {
  Table,
  Radio,
  Card,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import { TABLEHEADER } from './constant/TABLEHEADER';
import styles from './attendanceTable.module.scss';

const AttendanceTable = ({ data, onChangeAction }) => {
  const columnArr = Array.from(TABLEHEADER.COLUMN);

  const OPTIONS = {
    title: 'Attendance',
    key: 'attendance',
    render: (record) => (
      <Radio.Group
        value={record.status}
        options={[
          { label: 'Absent', value: 'Absent' },
          { label: 'Absent With Notice', value: 'Absent With Notice' },
          { label: 'Present', value: 'Present' },
        ]}
        onChange={({ target: { value } }) => {
          record.status = value;
          onChangeAction(record);
        }}
      />
    ),
  };
  return (
    <div className={styles.container}>
      <Card className={styles.table}>
        <Table columns={[...columnArr, OPTIONS]} dataSource={[...data]} />
      </Card>
    </div>
  );
};

export default AttendanceTable;

AttendanceTable.propTypes = {
  cohort: PropTypes.array,
  onClickAction: PropTypes.func,
};

AttendanceTable.defaultProps = {
  cohort: [],
  onClickAction: _noop,
};
