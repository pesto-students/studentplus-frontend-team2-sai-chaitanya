import React from 'react';
import { Listing } from '../../components';
import {
  Avatar,
  Button,
  Card,
  InputGroup,
  Label,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
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
            <InputGroup>
              <Row gutter={8}>
                <Col span={24}>
                  <Label className={styles.profileLabel}>Address</Label>
                </Col>
                <Col span={24}>
                  <Label className={styles.profileLabel}>Contact</Label>
                </Col>
                <Col span={24}>
                  <Label className={styles.profileLabel}>Email</Label>
                </Col>
              </Row>
            </InputGroup>
            <div className={styles.buttonCover}>
              <Button htmltype="submit" className={styles.editProfileBtn}>
                Edit
              </Button>
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
