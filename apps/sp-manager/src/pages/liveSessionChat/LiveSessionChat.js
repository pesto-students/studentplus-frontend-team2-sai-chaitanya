import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChatMessageBox, LiveVideoSession } from '../../components';
import styles from './liveSessionChat.module.scss';

const LiveSessionChat = () => {
  const [discussions, setDiscussions] = useState();
  const getAllDiscussions = async () => {
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/dapi/discussions`
    );
    return response.data;
  };
  useEffect(() => {
    getAllDiscussions().then((res) => {
      setDiscussions(res);
    });
  }, []);
  const ondiscussionChangeHandler = (discussion) => {
    console.log('disc', discussion);
  };
  return (
    <div className={styles.liveSessionChatCover}>
      <LiveVideoSession
        discussions={discussions}
        ondiscussionChange={ondiscussionChangeHandler}
      />
      <ChatMessageBox />
    </div>
  );
};

export default LiveSessionChat;
