import { useEffect, useState } from 'react';
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
  Upload,
  message,
} from '../../../../../../libs/ui-shared/src/lib/components';
import { UploadOutlined } from '@ant-design/icons';
// import moment from 'moment';
import styles from './assignmentForm.module.scss';
import axios from 'axios';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'application/pdf';

  if (!isJpgOrPng) {
    message.error('You can only upload PDF file!');
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

const programWeekData = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];

const assignmentSNo = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];

const AssignmentForm = ({
  initialValues,
  onSubmitHandler,
  isEdit,
  setIsEdit,
}) => {
  const [form] = Form.useForm();
  const [fileKey, setFileKey] = useState([]);
  const [fileObj, setFileObj] = useState({});
  const [cohorts, setCohorts] = useState([]);

  const getActiveCohorts = async () => {
    try {
      const response = await axios.get(
        `https://studentplus-backend.herokuapp.com/capi/cohorts/active`
      );
      return response.data;
    } catch (err) {
      try {
        const response = await axios.get(
          `http://localhost:3000/capi/cohorts/active`
        );
        return response.data;
      } catch (err) {
      console.log('Erro', err.message);
    }
  }
  };

  useEffect(() => {
    getActiveCohorts().then((resp) => {
      console.log('cchorts', resp);
      setCohorts(resp);
    });
  }, []);

  const onFinish = (values) => {
    setIsEdit = false;
    values.deckLink = fileObj;
    console.log('VALS: ', values);
    onSubmitHandler(values);
    form.resetFields();
  };

  useEffect(() => {
    const cohortArray = initialValues.cohorts;
    initialValues.cohorts ? console.log([...cohortArray]) : '';
    if (initialValues.cohorts) {
      form.setFieldsValue({
        _id: initialValues._id,
        assignmentTitle: initialValues.assignmentTitle,
        cohorts: initialValues.cohorts,
        desc: initialValues.desc,
        deckLink: initialValues.deckLink,
      });
      setFileKey([
        {
          uid: '1',
          name: initialValues.deckLink,
          status: 'done',
          url: initialValues.deckLink,
        },
      ]);
    }
  }, [initialValues, isEdit]);

  const handleChange = (fileObj) => {
    console.log('flconx', fileObj);
    console.log('tof', fileObj.fileList != []);
    fileObj.fileList.length
      ? setFileObj(fileObj.fileList[0].originFileObj)
      : setFileObj({});
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
                        <Select mode="tags">
                          {cohorts !== undefined
                            ? cohorts.map((res) => {
                                return (
                                  <Option key={res._id} value={res.cohortId}>
                                    {res.cohortId}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
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
                    <Col span={4}>
                      <Form.Item name="week" label="Program Week">
                        <Select>
                          {programWeekData !== undefined
                            ? programWeekData.map((res) => {
                                return (
                                  <Option key={res} value={res}>
                                    {res}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <Form.Item name="assignmentSNo" label="Assignment S.No. ">
                        <Select>
                          {assignmentSNo !== undefined
                            ? assignmentSNo.map((res) => {
                                return (
                                  <Option key={res} value={res}>
                                    {res}
                                  </Option>
                                );
                              })
                            : ''}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="fileLink" label="File Link">
                        <Upload
                          showUploadList={true}
                          customRequest={changeRequestStatus}
                          beforeUpload={beforeUpload}
                          onChange={(obj) => handleChange(obj)}
                          action=""
                          fileList={fileKey}
                        >
                          <Button htmlType="button" icon={<UploadOutlined />}>
                            Upload
                          </Button>
                        </Upload>
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
