import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Input,
  Label,
} from '../../../../../libs/ui-shared/src/lib/components';
import styles from './profile.module.scss';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Card className={styles.profileCard}>
          <div className={styles.avatarCover}>
            <Avatar size={150} />
            <Label strong={false} className={styles.label}>
              Username
            </Label>
          </div>
          <div className={styles.userInfoCover}>
            <Input type="text" label="Address : " />
            <Input type="text" label="Contact : " />
            <Input type="text" label="Email : " />
            <div className={styles.buttonCover}>
              <Button type="submit">Edit</Button>
            </div>
          </div>
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
