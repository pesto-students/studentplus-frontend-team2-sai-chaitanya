import {
  InputGroup,
  Textarea,
  Row,
  Col,
  Form,
  Title,
  Button,
} from 'libs/ui-shared/src/lib/components';
import { ChatMessage } from '../../molecules';
import styles from './chatMessageBox.module.scss';
import { useOktaAuth } from '@okta/okta-react';
import {
  pushComment,
} from '../../../routes/serverCalls';
const ChatMessageBox = ({ discussionId, comments }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const [commentForm] = Form.useForm();
  console.log('cstcomment', comments.data);
  const onFinish = async (values) => {
    pushComment(authState.idToken.claims.studentid, discussionId, values);
  };
  return (
    <div className={styles.chatBoxCover}>
      <Title level={4} className={styles.chatBoxTitle}>
        Comments
      </Title>
      <div className={styles.chatMessageList}>
        {comments
          ? comments.data.map((comment) => {
              return (
                <ChatMessage
                  user={{
                    userName: comment.user.userName,
                  }}
                  textMessage={comment.textMessage}
                  align={
                    authState.idToken.claims.studentid == comment.user.userId
                      ? 'end'
                      : 'start'
                  }
                  date={comment.createdAt}
                />
              );
            })
          : ''}
      </div>
      <div className={styles.messageTextBoxCover}>
        <Form
          form={commentForm}
          name="comment"
          onFinish={onFinish}
          scrollToFirstError
          labelWrap
          layout="vertical"
        >
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={20}>
                <Form.Item
                  name="textMessage"
                  label="Enter your comment here"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter text!',
                    },
                  ]}
                >
                  <Textarea />
                </Form.Item>
              </Col>
              <Col
                span={4}
                style={{
                  alignSelf: 'end',
                }}
              >
                <Button
                  htmlType="submit"
                  style={{
                    width: '100%',
                  }}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default ChatMessageBox;
