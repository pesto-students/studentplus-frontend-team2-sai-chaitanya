import PropTypes from 'prop-types';

import { Table,Card } from '../../../../../../libs/ui-shared/src/lib/components';
// import column from 'column';
import styles from './discussionTable.module.scss';
// import DATA from ''

const DiscussionTable = ({ dataSource, columns, ...otherProps }) => {
  const columnArr = Array.from(columns);
  const dataSourceArr = Array.from(dataSource);
  return (
    <div className={styles.container}>
      <Card className={styles.table}>
        <Table columns={columnArr} dataSource={dataSourceArr} {...otherProps} />
      </Card>
    </div>
  );
};

export default DiscussionTable;

DiscussionTable.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
};

DiscussionTable.defaultProps = {
  dataSource: [],
  columns: [],
};