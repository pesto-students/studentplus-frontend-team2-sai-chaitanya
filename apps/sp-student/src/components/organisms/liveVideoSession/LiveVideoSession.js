import {
  Label,
  Title,
  Select,
  Button,
} from 'libs/ui-shared/src/lib/components';
import ReactPlayer from 'react-player';
import React from 'react';
import styles from './liveVideoSession.module.scss';
import PropTypes from 'prop-types';
const messageListReferance = React.createRef();

const LiveVideoSession = ({ title, date, videoUrl }) => {
  return (
    <div className={styles.videoChatCover}>
      <div className={styles.videoSection}>
        <div className={styles.videoSectionHeader}>
          <div className={styles.sectionLeft}>
            <Title level={5}>{title}</Title>
            <Label>{date}</Label>
          </div>
          <div className={styles.sectionRight}>
            <Select value="Select Chatboard" />
          </div>
        </div>
        <ReactPlayer
          url={videoUrl}
          style={{
            borderRadius: 20,
            overflow: 'hidden',
          }}
        />
        <div className={styles.videoSectionHeader}>
          <div className={styles.sectionLeft}>
            <Button type="link">Deck Hyperlink</Button>
          </div>
          <div className={styles.sectionRight}>
            <Select value="Select Assignment" />
          </div>
        </div>
      </div>
      <div className={styles.chatSection}></div>
    </div>
  );
};

LiveVideoSession.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  videoUrl: PropTypes.string,
};

LiveVideoSession.defaultProps = {
  title: 'Life Skill Session - Week 5',
  date: '27 May 2022',
  videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
};

export default LiveVideoSession;
