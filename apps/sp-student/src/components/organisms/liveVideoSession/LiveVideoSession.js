import {
  Label,
  Title,
  Select,
  Option,
  Button,
} from 'libs/ui-shared/src/lib/components';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';
import styles from './liveVideoSession.module.scss';
import PropTypes from 'prop-types';
const messageListReferance = React.createRef();

const LiveVideoSession = ({ discussions, ondiscussionChange }) => {
  console.log(discussions);
  const [selectedDiscussion, setSelectedDiscussion] = useState(false);
  const onChangeHandler = (id) => {
    const selected = discussions.filter((res) => {
      return res._id == id ? res : '';
    });
    console.log(selected);
    setSelectedDiscussion(selected);
    ondiscussionChange(selected);
  };
  useEffect(() => {
   discussions?discussions.map((res, index) => {
     console.log('index', index);
	 console.log('res', res);
	 const resp = {0:res}
	 if(index==0)setSelectedDiscussion(resp);
   }):'';
  }, [discussions]);
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
              onChange={onChangeHandler}
              defaultValue={{
                value: selectedDiscussion ? selectedDiscussion[0]._id : '',
                label: selectedDiscussion
                  ? selectedDiscussion[0].discussionTitle
                  : '',
              }}
            >
              {discussions !== undefined ? (
                discussions.map((res) => {
                  return (
                    <Option key={res._id} value={res._id}>
                      {res.discussionTitle}
                    </Option>
                  );
                })
              ) : (
                <Option
                  key={selectedDiscussion._id}
                  value={selectedDiscussion._id}
                >
                  {selectedDiscussion.discussionTitle}
                </Option>
              )}
            </Select>
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
