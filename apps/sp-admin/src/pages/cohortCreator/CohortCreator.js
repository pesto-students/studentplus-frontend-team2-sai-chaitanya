import React from 'react';
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  EnvironmentOutlined,
  Form,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './cohortCreator.module.scss';
import axios from 'axios';

const CohortCreator = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
	console.log(values);
    try {
      const response = await axios.post(
        `https://studentplus-backend.herokuapp.com/capi/cohort/`,
        values
      );
      console.log('Cloudinary Resp :', response);
    } catch (err) {
      console.log('Cloudinary Error :', err);
    }
  };
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
              <Form
                form={form}
                name="createcohort"
                onFinish={onFinish}
                scrollToFirstError
                labelWrap
                layout="vertical"
              >
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item name="cohortId" label="Cohort ID">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="programType" label="Program Type">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={24}>
                      <Form.Item name="url" label="URL">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup>
                  <Row gutter={8}>
                    <Col span={8}>
                      <Form.Item name="sdate" label="Start Date">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name="edate" label="End Date">
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name="students" label="Students">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item name="programManager" label="Program Manager">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="phone" label="Phone" disabled>
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup>
                  <Row gutter={8}>
                    <Col span={12}></Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: '100%',
                        }}
                      >
                        Create
                      </Button>
                    </Col>
                  </Row>
                </InputGroup>
              </Form>
            </div>
          </div>
        </div>
      </Card>
      {/* <Card title="Content Details">
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
      </Card> */}
    </div>
  );
};

export default CohortCreator;
