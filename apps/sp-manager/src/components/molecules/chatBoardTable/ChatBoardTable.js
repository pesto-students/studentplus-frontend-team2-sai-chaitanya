import React from 'react';
import PropTypes from 'prop-types';

import { Table,Card } from '../../../../../../libs/ui-shared/src/lib/components/atoms';
// import column from 'column';
import styles from './chatBoardTable.module.scss';
// import DATA from ''

const ChatBoardTable = ({dataSource, columns}) => {
  const columnArr= Array.from(columns);
  const dataSourceArr= Array.from(dataSource);
  return (
    <div className={styles.container}>
      <Card className={styles.table}>
      <Table columns={columnArr} dataSource={dataSourceArr} />
      </Card>
    </div>
  );
};

export default ChatBoardTable;

ChatBoardTable.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
};

ChatBoardTable.defaultProps = {
  dataSource: [],
  columns: [],
};