
import {EventForm} from '../../components';
import styles from './eventEditor.module.scss';

const EventEditor = () => {
  return (
    <div className={styles.eventContainer}>
      <EventForm></EventForm>
    </div>
  );
};

export default EventEditor;
