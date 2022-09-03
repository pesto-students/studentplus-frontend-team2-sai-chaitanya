import { useState } from 'react';
import {
  Button,
  Card,
  RangePicker,
  Form,
  Input,
  Label,
  Title,
  Row,
  Col,
  Select,
  Textarea,
  InputGroup,
} from '../../../../../../libs/ui-shared/src/lib/components/';
// import moment from 'moment';
import styles from './eventForm.module.scss';

const cohorts = [
  {
    id: '001',
    name: 'Cohort 1',
  },
  {
    id: '002',
    name: 'Cohort 2',
  },
];
const prefixOpts = [
  {
    id: 'http://',
    name: 'http://',
  },
  {
    id: 'https://',
    name: 'https://',
  },
];
const suffixOpts = [
  {
    id: '.com',
    name: '.com',
  },
  {
    id: '.org',
    name: '.org',
  },
];
const selectBefore = (
  <Form.Item
    name="linkPrefix"
    rules={[
      {
        required: true,
        message: 'Please select prefix!',
      },
    ]}
    noStyle
  >
    <Select
      placeholder="http://"
      className="select-before"
      options={prefixOpts}
    />
  </Form.Item>
);
const selectAfter = (
  <Form.Item
    name="linkSufix"
    rules={[
      {
        required: true,
        message: 'Please select sufix!',
      },
    ]}
    noStyle
  >
    <Select placeholder=".com" className="select-after" options={suffixOpts} />
  </Form.Item>
);
const EventForm = ({ onSubmitHandler }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const startTime = values.startEndTime[0].format('YYYY-MM-DD HH:mm:ss');
    const endTime = values.startEndTime[1].format('YYYY-MM-DD HH:mm:ss');
    values.startTime = startTime;
    values.endTime = endTime;
    onSubmitHandler(values);
    form.resetFields();
  };
  //state
  const isEdit = false;
  return (
    <div className={styles.eventContainer}>
      <Card className={styles.eventForm}>
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Events Editor</Title>
            <Label strong={false}>{isEdit ? 'Edit Event' : 'Add Event'}</Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <Form
                form={form}
                name="createuser"
                onFinish={onFinish}
                scrollToFirstError
                labelWrap
                layout="vertical"
              >
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="eventTitle"
                        label="Event Title"
                        rules={[
                          {
                            required: true,
                            message: 'Please input event title!',
                            whitespace: false,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="cohorts"
                        label="Cohorts"
                        rules={[
                          {
                            required: true,
                            message: 'Please select cohort/s!',
                          },
                        ]}
                      >
                        <Select options={cohorts} mode="tags" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="eventLink"
                        label="Event Link"
                        rules={[
                          {
                            required: true,
                            message: 'Please input event link!',
                            whitespace: false,
                          },
                        ]}
                      >
                        <Input
                          addonBefore={selectBefore}
                          addonAfter={selectAfter}
                          className="ant-input-group-wrapper"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="password"
                        label="Event Password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input event password!',
                            whitespace: false,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="startEndTime"
                        label="Start/End Time"
                        rules={[
                          {
                            type: 'array',
                            required: true,
                            message: 'Please input start date and time!',
                          },
                        ]}
                      >
                        <RangePicker showTime />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="docSource" label="Document Source">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={24}>
                      <Form.Item name="eventDesc" label="Event Description">
                        <Textarea />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <div className={styles.buttonContainerHorizontal}>
                  <Button
                    htmltype="button"
                    type="default"
                    className={styles.clear}
                  >
                    Clear
                  </Button>
                  <Button htmltype="submit" className={styles.save}>
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventForm;
