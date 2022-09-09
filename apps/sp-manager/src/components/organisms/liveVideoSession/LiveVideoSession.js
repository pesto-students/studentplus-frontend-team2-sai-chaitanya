import {
  Label,
  Title,
  Select,
  Button,
} from 'libs/ui-shared/src/lib/components';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import styles from './liveVideoSession.module.scss';
import PropTypes from 'prop-types';
const messageListReferance = React.createRef();

const LiveVideoSession = ({ discussions, ondiscussionChange }) => {
  console.log(discussions);
  const [selectedDiscussion, setSelectedDiscussion] = useState();
  const onChangeHandler = (id) => {
    const selected = discussions.filter((res) => {
      return res._id == id ? res : '';
    });
    console.log(selected);
    setSelectedDiscussion(selected);
    ondiscussionChange(selected);
  };
  return (
    <div className={styles.videoChatCover}>
      <div className={styles.videoSection}>
        <div className={styles.videoSectionHeader}>
          <div className={styles.sectionLeft}>
            <Title level={5}>
              {selectedDiscussion ? selectedDiscussion[0].discussionTitle : ''}
            </Title>
            <Label>
              {selectedDiscussion ? selectedDiscussion[0].createdAt : ''}
            </Label>
          </div>
          <div className={styles.sectionRight}>
            <Select
              options={
                discussions !== undefined
                  ? discussions.map((res) => {
                      return {
                        id: res._id,
                        name: res.discussionTitle,
                      };
                    })
                  : []
              }
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className={styles.videoPlayer}>
          <ReactPlayer
            url={selectedDiscussion ? selectedDiscussion[0].media : ''}
            style={{
              borderRadius: 20,
              overflow: 'hidden',
            }}
          />
        </div>
        <div className={styles.videoSectionHeader}>
          <div className={styles.sectionLeft}>
            <Button
              type="link"
              href={
                selectedDiscussion
                  ? `http://${selectedDiscussion[0].deckLink}`
                  : ''
              }
            >
              Deck Hyperlink
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

LiveVideoSession.propTypes = {
  discussions: PropTypes.array,
  selectedDiscussion: PropTypes.array,
  selectHandler: PropTypes.func,
};

LiveVideoSession.defaultProps = {
  discussions: [],
  selectedDiscussion: [],
  selectHandler: () => {},
};

export default LiveVideoSession;
