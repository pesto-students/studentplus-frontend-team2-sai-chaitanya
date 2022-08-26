import React from 'react';
import PropTypes from 'prop-types';

import { Table,Card } from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import {TABLEHEADER} from './constant/TABLEHEADER'
import styles from './assignmentTable.module.scss';


const AssignmentTable = ({dataSource, columns}) => {
  const columnArr= Array.from(TABLEHEADER.COLUMN);
  const dataSourceArr= Array.from(dataSource);
  return (
    <div className={styles.container}>
      <Card className={styles.table}>
      <Table columns={columnArr} dataSource={dataSourceArr} />
      </Card>
    </div>
  );
};

export default AssignmentTable;

AssignmentTable.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
};

AssignmentTable.defaultProps = {
  dataSource: [],
  columns: [],
};