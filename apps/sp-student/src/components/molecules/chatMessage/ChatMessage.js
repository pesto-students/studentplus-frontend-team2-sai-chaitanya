import React from 'react';
import {
  Avatar,
  Label,
  Title,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
import PropTypes from 'prop-types';
import styles from './chatMessage.module.scss';
const ChatMessage = ({ user, textMessage, align, date }) => {
	const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div
      className={styles.chatMessageCover}
      style={{
        alignSelf: align,
      }}
    >
      <div className={styles.avatarCover}>
        <Avatar />
        <div className={styles.chatMeta}>
          <Title level={5}>{user.userName}</Title>
          <div className={styles.messageDate}>{formatDate(date)}</div>
        </div>
      </div>
      <div className={styles.messageTextCover}>
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
