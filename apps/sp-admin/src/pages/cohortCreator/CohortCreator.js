import React from 'react';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  EnvironmentOutlined,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './cohortCreator.module.scss';

const CohortCreator = () => {
  return (
    <div className={styles.accountContainer}>
      <Card title="Cohort Settings">
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Cohort Information</Title>
            <Label strong={false}>
              This information will be displayed publically.
            </Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>Cohort ID</Label>
                    <Input type="text" bordered={true} />
                  </Col>
                  <Col span={12}>
                    <Label>Program Type</Label>
                    <Input type="text" />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={24}>
                    <Label>URL</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={8}>
                    <Label>Start Date</Label>
                    <DatePicker />
                  </Col>
                  <Col span={8}>
                    <Label>End Date</Label>
                    <DatePicker />
                  </Col>
                  <Col span={8}>
                    <Label>Student</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>Program Manager</Label>
                    <Input type="text" />
                  </Col>
                  <Col span={12}>
                    <Label>Contact Number</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <InputGroup>
                  <Row gutter={8}>
                    <Col span={12}></Col>
                    <Col span={12} className={styles.flexDisplay}>
                      <Button
                        htmltype="button"
                        className={styles.actionButtons}
                        type="default"
                      >
                        Cancel
                      </Button>
                      <Button
                        className={styles.actionButtons}
                        htmltype="submit"
                      >
                        Create
                      </Button>
                    </Col>
                  </Row>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card title="Content Details">
        <div className={styles.cardContainer}>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={12}>
                <Label>Planned Assignments</Label>
                <Input type="text" />
              </Col>
              <Col span={12}>
                <Label>Program Calender</Label>
                <Input type="text" />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup>
            <Row gutter={8}>
              <Col span={12}></Col>
              <Col span={12} className={styles.flexDisplay}>
                <Button
                  htmltype="button"
                  className={styles.actionButtons}
                  type="default"
                >
                  Cancel
                </Button>
                <Button className={styles.actionButtons} htmltype="submit">
                  Create
                </Button>
              </Col>
            </Row>
          </InputGroup>
        </div>
      </Card>
    </div>
  );
};

export default CohortCreator;
