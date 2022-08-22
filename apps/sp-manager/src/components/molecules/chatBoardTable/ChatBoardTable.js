
import {
  Table
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
// import moment from 'moment';
import styles from './chatBoardTable.module.scss';
import TABLEHEADER from './constant'
// import DATA from './constant'
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
];

const ChatBoardTable = () => {
  //state
  const isEdit = false;
  return (
    <div className={styles.eventContainer}>
      {/* <Table columns={TABLEHEADER.COLUMN} dataSource={data} /> */}
    </div>
  );
};

export default ChatBoardTable;
