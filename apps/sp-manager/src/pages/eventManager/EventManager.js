
import {EventForm} from '../../components';
import styles from './eventManager.module.scss';

const EventManager = () => {
  return (
    <div className={styles.eventContainer}>
      <EventForm></EventForm>
    </div>
  );
};

export default EventManager;
