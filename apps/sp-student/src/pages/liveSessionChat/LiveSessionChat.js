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
import { CompassOutlined } from '@ant-design/icons';

const LiveSessionChat = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [discussions, setDiscussions] = useState();
  const [comments, setComments] = useState([]);
  const [currentDiscussion, setCurrentDiscussion] = useState();
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
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
        if (index == 0) {
          getCommentsByDiscussionId(discussion._id).then((response)=>{
			console.log('REsp1', response);
			setComments(response);
		  });
          setCurrentDiscussion(discussion._id);
        }
      });
    }
  }, [discussions]);
  const ondiscussionChangeHandler = (discussion) => {
    console.log('disc', discussion);
    const resp = getCommentsByDiscussionId(discussion[0]._id).then(
      (response) => {

        

        console.log('REsp3', response);

        setComments(response);
      }
    );
    setCurrentDiscussion(discussion[0]._id);
  };
  return (
    <div className={styles.liveSessionChatCover}>
      <LiveVideoSession
        discussions={discussions}
        ondiscussionChange={ondiscussionChangeHandler}
        dateFormat={formatDate}
      />
      <ChatMessageBox
        discussionId={currentDiscussion ? currentDiscussion : ''}
        comments={comments}
        dateFormat={formatDate}
      />
    </div>
  );
};

export default LiveSessionChat;
