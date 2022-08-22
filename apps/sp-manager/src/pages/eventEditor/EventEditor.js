
import {EventForm, EventTable} from '../../components';
import styles from './eventEditor.module.scss';

const EventEditor = () => {
  return (
    <div className={styles.eventContainer}>
      <EventForm></EventForm>
      <EventTable></EventTable>
    </div>
  );
};

export default EventEditor;
