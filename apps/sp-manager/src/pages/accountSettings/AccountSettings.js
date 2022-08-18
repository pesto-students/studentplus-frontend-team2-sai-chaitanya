import { Col, Row } from 'antd';
import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './accountSettings.module.scss';

const AccountSettings = () => {
  return (
    <div className={styles.accountContainer}>
      <Card className={styles.accountInfo} title="Account Settings">
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Personal Information</Title>
            <Label strong={false}>
              This information will be displayed publically.
            </Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.avatarInfo}>
              <Avatar size={100} />
              <div className={styles.buttonContainer}>
                <Button type="submit" className={styles.uploadPicture}>
                  Upload
                </Button>
                <Button type="button" className={styles.removePicture}>
                  Remove
                </Button>
              </div>
            </div>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="First Name : " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Last Name : " />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="URL : " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Email : " />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="Contact : " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Street Address : " />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="City : " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="State : " />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Title level={5} className={styles.textLabel}>
                    About You :
                  </Title>
                  <Textarea type="text" />
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <Button type="button" className={styles.removePicture}>
                  Cancel
                </Button>
                <Button type="submit" className={styles.uploadPicture}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className={styles.securityInfo} title="Security Settings">
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Update Password </Title>
            <Label strong={false}>
              This information will be displayed publicaly.
            </Label>
          </div>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={12}>
                <Input type="text" label="Old Password : " />
              </Col>
              <Col span={12}>
                <Input type="text" label="New Password : " />
              </Col>
              <Col span={12}>
                <Input type="text" label="Confirm Password : " />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={8}></Col>
              <Col span={8}></Col>
              <Col span={8}>
                <div className={styles.buttonContainerHorizontal}>
                  <Button
                    type="submit"
                    block={true}
                    className={styles.uploadPicture}
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </InputGroup>
        </div>
      </Card>
    </div>
  );
};

export default AccountSettings;
