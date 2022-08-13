import React from 'react';
import {
  Avatar,
  Button,
  Card,
  EnvironmentOutlined,
  Input,
} from '../../components';
import styles from './profile.module.scss';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Card className={styles.profileCard}>
          <Avatar size={150} />
          <Input type="text" prefix={<EnvironmentOutlined />} />
          <Input type="text" prefix={<EnvironmentOutlined />} />
          <Input type="text" prefix={<EnvironmentOutlined />} />
          <Button type="submit">Edit</Button>
        </Card>
      </div>
      <div className={styles.otherInfo}>
        <div className={styles.info}>
          <Card className={styles.assignmentCard} title="Assignments"></Card>
        </div>
        <div className={styles.info}>
          <Card className={styles.chatBoardCard} title="Chatboards"></Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
