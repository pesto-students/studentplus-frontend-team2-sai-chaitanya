import { Button, Input, Title } from 'libs/ui-shared/src/lib/components';
import { ChatMessage } from '../../molecules';
import styles from './chatMessageBox.module.scss';

const ChatMessageBox = () => {
  return (
    <div className={styles.chatBoxCover}>
      <Title level={2} className={styles.chatBoxTitle}>
        Chat
      </Title>
      <div className={styles.chatMessageList}>
        <ChatMessage
          user={{
            userName: 'Navneet',
          }}
          textMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla"
        />
        <ChatMessage
          user={{
            userName: 'Naveen',
          }}
          textMessage="laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
        />
        <ChatMessage
          user={{
            userName: 'Navneet',
          }}
          textMessage="Sed ut perspiciatis unde omnis iste natus"
        />
        <ChatMessage
          user={{
            userName: 'Naveen',
          }}
          textMessage="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
      </div>
      <div className={styles.messageTextBoxCover}>
        <div className={styles.messageInputBoxCover}>
          <Input />
        </div>
        <div className={styles.messagesendButtonCover}>
          <Button className={styles.messagesendButton}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessageBox;
