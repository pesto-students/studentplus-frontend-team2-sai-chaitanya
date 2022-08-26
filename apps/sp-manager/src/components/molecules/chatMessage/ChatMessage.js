import React from 'react';
import {
  Avatar,
  Label,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import PropTypes from 'prop-types';
import styles from './chatMessage.module.scss';
const ChatMessage = ({ user, textMessage }) => {
  return (
    <div className={styles.chatMessageCover}>
      <div className={styles.avatarCover}>
        <Avatar />
      </div>
      <div className={styles.messageTextCover}>
        <Title level={5}>{user.userName}</Title>
        <Label className={styles.textMessage}>{textMessage}</Label>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  user: PropTypes.object,
  textMessage: PropTypes.string,
};

ChatMessage.defaultProps = {
  user: {},
  textMessage: '',
};

export default ChatMessage;
