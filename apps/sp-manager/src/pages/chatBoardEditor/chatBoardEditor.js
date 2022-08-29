import { ChatBoardForm, ChatBoardTable } from '../../components';
import styles from './chatBoardEditor.module.scss';

const ChatBoardEditor = () => {
  return (
    <div className={styles.eventContainer}>
      <ChatBoardForm />
      <ChatBoardTable />
    </div>
  );
};

export default ChatBoardEditor;
