
import { AssignmentForm, AssignmentTable } from '../../components';
import styles from './assignmentEditor.module.scss';

const AssignmentEditor = () => {
  return (
    <div className={styles.eventContainer}>
      <AssignmentForm/>
      <AssignmentTable/>
    </div>
  );
};

export default AssignmentEditor;
