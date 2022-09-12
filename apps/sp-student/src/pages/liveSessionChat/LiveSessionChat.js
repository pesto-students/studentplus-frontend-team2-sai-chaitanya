import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChatMessageBox, LiveVideoSession } from '../../components';
import styles from './liveSessionChat.module.scss';
import {
  getUserInfo,
  getCommentsByDiscussionId,
  getDiscussionsByCohort,
} from '../../routes/serverCalls';
import { useOktaAuth } from '@okta/okta-react';

const LiveSessionChat = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [discussions, setDiscussions] = useState();
  const [comments, setComments] = useState(false);
  const [currentDiscussion, setCurrentDiscussion] = useState({});
  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then(async (response) => {
      getDiscussionsByCohort(response.cohort).then((res) => {
        setDiscussions(res);
      });
    });
  }, []);
  useEffect(() => {
    if (discussions) {
      discussions.filter((discussion, index) => {
        if (index == 0) getCommentsByDiscussionId(discussion._id, setComments);
      });
    } else {
      setComments(false);
    }
  }, [discussions]);
  const ondiscussionChangeHandler = (discussion) => {
    console.log('disc', discussion);
    const resp = getCommentsByDiscussionId(discussion[0]._id, setComments);
    console.log(resp);
    setCurrentDiscussion(discussion[0]._id);
  };
  return (
    <div className={styles.liveSessionChatCover}>
      <LiveVideoSession
        discussions={discussions}
        ondiscussionChange={ondiscussionChangeHandler}
      />
      <ChatMessageBox
        discussionId={currentDiscussion ? currentDiscussion : ''}
        comments={comments}
      />
    </div>
  );
};

export default LiveSessionChat;
