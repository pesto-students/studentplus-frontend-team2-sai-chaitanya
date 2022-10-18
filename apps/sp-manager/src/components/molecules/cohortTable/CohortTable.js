import PropTypes from 'prop-types';
import { _noop } from 'lodash';

import {
  Table,
  Radio,
  Card,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import { TABLEHEADER } from './constant/TABLEHEADER';
import styles from './cohortTable.module.scss';

const CohortTable = ({ data, onChangeAction }) => {
  const columnArr = Array.from(TABLEHEADER.COLUMN);

  const OPTIONS = {
    title: 'User Status',
    key: 'status',
    render: (record) => (
      <Radio.Group
        value={record.status}
        options={[
          { label: 'Active', value: 'Active' },
          { label: 'Deferred', value: 'Deferred' },
          { label: 'Deferment Requested', value: 'Deferment Requested' },
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
        <Table columns={[...columnArr, OPTIONS]} dataSource={[...data]} scroll= {{}} pagination={false} />
      </Card>
    </div>
  );
};

export default CohortTable;

CohortTable.propTypes = {
  cohort: PropTypes.array,
  onClickAction: PropTypes.func,
};

CohortTable.defaultProps = {
  cohort: [],
  onClickAction: _noop,
};
