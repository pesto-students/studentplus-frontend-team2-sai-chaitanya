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
import styles from './assignmentForm.module.scss';
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
const weekData = ['Week1', 'Week2'];
const AssignmentForm = ({ initialValues, onSubmitHandler }) => {
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
      assignmentTitle: initialValues.assignmentTitle,
      cohorts: initialValues.cohorts,
      desc: initialValues.desc,
      deckLink: initialValues.deckLink,
    });
  }, [initialValues]);
  //state
  const isEdit = false;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.container}>
      <Card className={styles.form}>
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Assignment Editor</Title>
            <Label strong={false}>
              {isEdit ? 'Edit Assignment' : 'Add Assignment'}
            </Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <Form
                form={form}
                name="createAssignment"
                onFinish={onFinish}
                scrollToFirstError
                labelWrap
                layout="vertical"
              >
                <InputGroup size="large">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Form.Item
                        name="assignmentTitle"
                        label="Assignment Title"
                        rules={[
                          {
                            required: true,
                            message: 'Please input assignment title!',
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
                        <Form.Item name="desc" label="Description">
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

export default AssignmentForm;
