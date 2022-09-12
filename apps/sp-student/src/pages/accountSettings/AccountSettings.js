import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
  Col,
  Row,
  message,
  Upload,
} from '../../../../../libs/ui-shared/src/lib/components/atoms';
import styles from './accountSettings.module.scss';
import axios from 'axios';
import IMAGE_PATHS from '../../../../../libs/ui-shared/public/images/constants'

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

const changeRequestStatus = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};

const AccountSettings = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [imageUrl, setImageUrl] = useState();
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const handleChange = (uploadObj) => {
    console.log(uploadObj);
    const formData = new FormData();

    if (uploadObj.file.status == 'done') {
      formData.append('file', uploadObj.fileList[0].originFileObj);
      formData.append('upload_preset', 'twivocmt');
      formData.append('api_key', '447634538816736');
      try {
        const response = axios
          .post(
            'https://api.cloudinary.com/v1_1/dhibsuxt9/image/upload',
            formData
          )
          .then((res) => {
            setImageUrl(res.data.secure_url);
            console.log('Cloudinary Resp :', res);
          });
      } catch (err) {
        console.log('Cloudinary Error :', err);
      }
    }
  };

  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
          backgroundImage: `url(${IMAGE_PATHS.USERIMAGE})`,
		  width:"200px",
		  height: "200px",
		  backgroundRepeat: "no-repeat",
		  backgroundSize: "contain"
        }}
      >
      </div>
    </div>
  );
  useEffect(() => {
    form.setFieldsValue({
      img: imageUrl,
    });
  }, [imageUrl]);
  useEffect(() => {
    getUserInfo().then((resp) => {
      console.log(resp);
      form.setFieldsValue({
        firstName: resp.firstName,
        lastName: resp.lastName,
        email: resp.email,
        phone: resp.phone.toString(),
        city: resp.city,
        state: resp.state,
        streetAddr: resp.streetAddr,
        url: resp.url,
        about: resp.about,
        img: resp.img,
      });
      setImageUrl(resp.img);
    });
  }, []);

  const getUserInfo = async () => {
	console.log(authState);
    const response = await axios.get(
      `https://studentplus-backend.herokuapp.com/sapi/student/${authState.idToken.claims.studentid}`
    );
    return response.data;
  };
  const onFinish = async (values) => {
    try {
      const response = await axios.put(
        `https://studentplus-backend.herokuapp.com/sapi/student/${authState.idToken.claims.studentid}`,
        values
      );
      console.log('Cloudinary Resp :', response);
      message.success('Profile Updated!');
    } catch (err) {
      console.log('Cloudinary Error :', err);
    }
  };
  const onUpdatePassword = async (values) => {
    values.email = authState.idToken.claims.email;
    try {
      const response = await axios.post(
        `http://localhost:3000/sapi/change-password/`,
        values
      );
      console.log('Cloudinary Resp :', response);
      message.success('Password Updated!');
    } catch (err) {
      console.log('Error :', err);
    }
  };
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
          <Row>
            <Col span={12} xs={24} sm={24} md={24} lg={24} xl={8}>
              <div className={styles.avatarInfo}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  customRequest={changeRequestStatus}
                  beforeUpload={beforeUpload}
                  onChange={(obj) => handleChange(obj)}
                  action=""
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: '100%',
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
            </Col>
            <Col span={12} xs={24} sm={24} md={24} lg={24} xl={16}>
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
                      <Col span={12} xs={24} md={12}>
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
                      <Col span={12} xs={24} md={12}>
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
                      <Col span={12} xs={24} md={12}>
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
                          <Input disabled={true} />
                        </Form.Item>
                      </Col>
                      <Col span={12} xs={24} md={12}>
                        <Form.Item
                          name="phone"
                          label="Contact"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your contact number!',
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
                      <Col span={24} xs={24} md={12}>
                        <Form.Item name="streetAddr" label="Street Address">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </InputGroup>
                  <InputGroup size="large">
                    <Row gutter={8}>
                      <Col span={12} xs={24} md={12}>
                        <Form.Item
                          name="city"
                          label="City"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your city!',
                            },
                          ]}
                          disabled
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12} xs={24} md={12}>
                        <Form.Item name="state" label="State">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </InputGroup>
                  <InputGroup size="large">
                    <Row gutter={8}>
                      <Col span={24} xs={24} md={12}>
                        <Form.Item name="about" label="About You">
                          <Textarea />
                        </Form.Item>
                      </Col>
                    </Row>
                  </InputGroup>
                  <InputGroup size="large">
                    <Row gutter={8}>
                      <Col span={12}></Col>
                      <Col span={12} xs={24} md={12}>
                        <Form.Item name="img" hidden={true}>
                          <Input />
                        </Form.Item>
                        <Form.Item>
                          <div className={styles.buttonContainerHorizontal}>
                            <Button
                              type="primary"
                              htmlType="submit"
                              style={{
                                width: '100%',
                              }}
                            >
                              Update
                            </Button>
                          </div>
                        </Form.Item>
                      </Col>
                    </Row>
                  </InputGroup>
                </Form>
              </div>
            </Col>
          </Row>
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
          <Form
            form={passwordForm}
            name="updatePassword"
            onFinish={onUpdatePassword}
            scrollToFirstError
            labelWrap
            layout="vertical"
          >
            <InputGroup size="large">
              <Row gutter={8}>
                <Col span={12} xs={24} md={12}>
                  <Form.Item
                    name="password"
                    label="New Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} xs={24} md={12}>
                  <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm password!',
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
              <Row gutter={8}>
                <Col span={12}></Col>
                <Col span={12}>
                  <div className={styles.buttonContainerHorizontal}>
                    <Button
                      htmlType="submit"
                      block={true}
                      className={styles.uploadPicture}
                    >
                      Save
                    </Button>
                  </div>
                </Col>
              </Row>
            </InputGroup>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default AccountSettings;
