import React from 'react';
import {
  Avatar,
  Button,
  Card,
  EnvironmentOutlined,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './accountSettings.module.scss';

const AccountSettings = () => {
  return (
    <div className={styles.accountContainer}>
      <Card title="Account Settings">
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
                <Button htmltype="submit">Upload</Button>
                <Button htmltype="button" type="default">
                  Remove
                </Button>
              </div>
            </div>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>First Name</Label>
                    <Input type="text" bordered={true} />
                  </Col>
                  <Col span={12}>
                    <Label>Last Name</Label>
                    <Input type="text" />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>URL</Label>
                    <Input type="text" />
                  </Col>
                  <Col span={12}>
                    <Label>Email</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>Contact</Label>
                    <Input type="text" />
                  </Col>
                  <Col span={12}>
                    <Label>Street Address</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>City</Label>
                    <Input type="text" />
                  </Col>
                  <Col span={12}>
                    <Label>State</Label>
                    <Input type="text" />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Label>About You</Label>
                  <Textarea type="text" />
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <Button
                  htmltype="button"
                  className={styles.actionButtons}
                  type="default"
                >
                  Cancel
                </Button>
                <Button className={styles.actionButtons} htmltype="submit">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Security Settings">
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
                <Label>Old Password</Label>
                <Input type="text" />
              </Col>
              <Col span={12}>
                <Label>New Password</Label>
                <Input type="text" />
              </Col>
              <Col span={12}>
                <Label>Confirm Password</Label>
                <Input type="text" />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={8}></Col>
              <Col span={8}></Col>
              <Col span={8}>
                <div className={styles.buttonContainerHorizontal}>
                  <Button
                    htmltype="submit"
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
