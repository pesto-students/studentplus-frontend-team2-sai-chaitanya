import {
  InputGroup,
  Textarea,
  Row,
  Col,
  Form,
  Title,
  Button,
  Avatar,
} from 'libs/ui-shared/src/lib/components';
import { ChatMessage } from '../../molecules';
import styles from './chatMessageBox.module.scss';
import { useOktaAuth } from '@okta/okta-react';
import { pushComment } from '../../../routes/serverCalls';
import { Comment } from 'antd';
import { useEffect, useState } from 'react';
import { getCommentsByDiscussionId } from '../../../routes/serverCalls';
const ChatMessageBox = ({ discussionId, comments, dateFormat }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const [allComments, setAllComments] = useState(comments);
  const [commentForm] = Form.useForm();
  console.log('discussionId', discussionId);
  console.log("comments", comments)
  console.log("allcomments", allComments)
  useEffect(() => {
    setAllComments(comments);
  }, [comments]);

  const onFinish = async (values) => {
      await pushComment(
        authState.idToken.claims.studentid,
        discussionId,
        values,
        setAllComments
      )
//setAllComments((comments) => comments.data.concat(resp.comment));
    commentForm.resetFields();
  };
  return (
    <div className={styles.chatBoxCover}>
      <Title level={4} className={styles.chatBoxTitle}>
        Comments
      </Title>
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
      <div className={styles.chatMessageList}>
        {console.log('asdf', allComments)}
        {allComments && allComments.length
          ? allComments.map((comment) => {
              return (
                <Comment
                  key = {comment._id}
                  author={comment.user.userName}
                  avatar={
                    <Avatar
                      src={comment.user.avatarImg}
                      alt={comment.user.userName}
                    />
                  }
                  content={<p>{comment.textMessage}</p>}
                  datetime={<span>{dateFormat(comment.createdAt)}</span>}
                />
              );
            })
          : console.log(allComments)}
      </div>
    </div>
  );
};

export default ChatMessageBox;
