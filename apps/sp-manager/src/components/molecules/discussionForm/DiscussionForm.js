import { useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Label,
  Row,
  Select,
  Space,
  Title,
  Textarea,
  InputGroup,
} from '../../../../../../libs/ui-shared/src/lib/components';
// import moment from 'moment';
import styles from './discussionForm.module.scss';

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
const assignments = [
  {
    id: '001',
    name: 'Assignment 1',
  },
  {
    id: '002',
    name: 'Assignment 2',
  },
];
const DiscussionForm = ({ initialValues, onSubmitHandler }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    onSubmitHandler(values);
    form.resetFields();
  };

  useEffect(() => {
    const cohortArray = initialValues.cohorts;
    initialValues.cohorts ? console.log([...cohortArray]) : '';
    form.setFieldsValue({
      _id: initialValues._id,
      discussionTitle: initialValues.discussionTitle,
      cohorts: initialValues.cohorts,
      boardDesc: initialValues.boardDesc,
      deckLink: initialValues.deckLink,
      assignments: initialValues.assignments,
    });
  }, [initialValues]);

  //state
  const isEdit = false;
  return (
    <div className={styles.container}>
      <Card className={styles.form}>
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Discussion Editor</Title>
            <Label strong={false}>
              {isEdit ? 'Edit Discussion' : 'Add Discussion'}
            </Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <Form
                form={form}
                name="creatediscussion"
                onFinish={onFinish}
                scrollToFirstError
                labelWrap
                layout="vertical"
              >
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="discussionTitle"
                        label="Discussion Title"
                        rules={[
                          {
                            required: true,
                            message: 'Please input discussion title!',
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
                  <Space
                    direction="vertical"
                    size={20}
                    style={{
                      display: 'flex',
                    }}
                  >
                    <Row gutter={8}>
                      <Col span={24}>
                        <Form.Item name="boardDesc" label="Description">
                          <Textarea />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Title level={5}>Resource</Title>
                  </Space>
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="deckLink"
                        label="Deck Link"
                        rules={[
                          {
                            required: true,
                            message: 'Please input deck link!',
                            whitespace: false,
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="assignments"
                        label="Assignments"
                        rules={[
                          {
                            required: true,
                            message: 'Please select cohort/s!',
                          },
                        ]}
                      >
                        <Select options={assignments} mode="tags" />
                      </Form.Item>
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup size="large">
                  <Form.Item name="_id" hidden>
                    <Input />
                  </Form.Item>
                  <Row gutter={8}>
                    <Col span={12}></Col>
                    <Col span={12}>
                      <Button
                        htmltype="submit"
                        className={styles.save}
                        style={{
                          width: '100%',
                          marginTop: '20px',
                        }}
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </InputGroup>
              </Form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DiscussionForm;
