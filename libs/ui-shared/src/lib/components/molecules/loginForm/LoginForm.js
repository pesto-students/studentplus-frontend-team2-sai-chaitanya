import {
  Button,
  Form,
  Input,
  InputGroup,
  Label,
  Title,
  Col,
  Row,
  KeyOutlined,
  UserOutlined,
} from '../../atoms';
import styles from './loginForm.module.scss';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

const LoginForm = ({ authState, onLogin, setUsername, setPassword }) => {
	  const [form] = Form.useForm();
  if (!authState.isAuthenticated) {
    return (
      <div className={styles.loginFormCover}>
        <div className={styles.loginHeader}>
          <Title level={3} className={styles.formTitle}>Login</Title>
          <Label className={styles.formLabel}>
            Welcome back! Please enter your details
          </Label>
        </div>
        <Form
          form={form}
          name="login"
          onFinish={onLogin}
          scrollToFirstError
          labelWrap
          layout="vertical"
        >
          <div className={styles.formGroup}>
            <InputGroup size="large">
              <Row gutter={8}>
                <Col span={24}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                        whitespace: false,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      prefix={<UserOutlined />}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Email Address"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                        whitespace: false,
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Password"
                      prefix={<KeyOutlined />}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </InputGroup>

            <Button variant="contained" htmlType="submit" className={styles.loginButton}>
              Sign in
            </Button>
          </div>
        </Form>
      </div>
    );
  }
};

LoginForm.propTypes = {
  authState: PropTypes.object,
  onLogin: PropTypes.func,
  setUsername: PropTypes.func,
  setPassword: PropTypes.func,
};

LoginForm.defaultProps = {
  authState: {},
  onLogin: _noop,
  setUsername: _noop,
  setPassword: _noop,
};

export default LoginForm;
