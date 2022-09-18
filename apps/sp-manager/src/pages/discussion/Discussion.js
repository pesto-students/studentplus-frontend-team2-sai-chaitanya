import React, { useEffect, useState } from 'react';
import { ChatMessageBox, VideoSession } from '../../components';
import styles from './discussion.module.scss';
import {
  getUserInfo,
  getCommentsByDiscussionId,
  getDiscussionsByCohort,
} from '../../routes/serverCalls';
import { useOktaAuth } from '@okta/okta-react';

const Discussion = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [discussions, setDiscussions] = useState();
  const [comments, setComments] = useState([]);
  const [currentDiscussion, setCurrentDiscussion] = useState();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  //Getting list of available discussions by matching authenticated user Cohort and events Cohort
  useEffect(() => {
    getUserInfo(authState.idToken.claims.studentid).then(async (response) => {
      getDiscussionsByCohort(response.cohort).then((res) => {
        setDiscussions(res);
      });
    });
  }, []);

  //Getting all comments from discussion at index 0 and setting currentDiscussion value the same.
  useEffect(() => {
    if (discussions) {
      discussions.filter((discussion, index) => {
        if (index == 0) {
          getCommentsByDiscussionId(discussion._id).then((response) => {
            setComments(response.data);
          });
          setCurrentDiscussion(discussion._id);
        }
      });
    }
  }, [discussions]);

  //On change of selected discussion resetting the comments array based on selected discussion ID
  const ondiscussionChangeHandler = (discussion) => {
    const resp = getCommentsByDiscussionId(discussion[0]._id).then(
      (response) => {
        setComments(response.data);
      }
    );
    setCurrentDiscussion(discussion[0]._id);
  };

  return (
    <div className={styles.liveSessionChatCover}>
      <VideoSession
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

export default Discussion;
