import React from 'react';
import { Avatar, Button, Card, Input, Label, Listing } from '../../components';
import styles from './profile.module.scss';

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userInfo}>
        <Card>
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
          <Card title="Assignments">
            <div className={styles.cardContainer}>
              <Listing percent={50} />
              <Listing percent={30} />
              <Listing percent={70} />
            </div>
          </Card>
        </div>
        <div className={styles.info}>
          <Card title="Chatboards">
            <div className={styles.cardContainer}>
              <Listing percent={20} />
              <Listing percent={80} />
              <Listing percent={38} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
