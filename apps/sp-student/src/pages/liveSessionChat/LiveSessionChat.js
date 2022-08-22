import React from 'react';
import { ChatMessageBox, LiveVideoSession } from '../../components';
import styles from './liveSessionChat.module.scss';

const LiveSessionChat = () => {
  return (
    <div className={styles.liveSessionChatCover}>
      <LiveVideoSession />
      <ChatMessageBox />
    </div>
  );
};

export default LiveSessionChat;
