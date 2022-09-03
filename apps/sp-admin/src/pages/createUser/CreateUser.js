import {
  Button,
  Card,
  Form,
  Input,
  InputGroup,
  Col,
  Row,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './createUser.module.scss';
import axios from 'axios';

const CreateUser = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await axios.post('http://localhost:3000/sapi/student', values);
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.form} title="Create User">
        <div className={styles.cardContainer}>
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
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                        whitespace: false,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input last name!',
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
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
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
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error(
                              'The two passwords that you entered do not match!'
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </InputGroup>
            <InputGroup size="large">
              <Row gutter={8}>
                <Col span={12}></Col>
                <Col span={12}>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: '100%',
                      }}
                    >
                      Register
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </InputGroup>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default CreateUser;
