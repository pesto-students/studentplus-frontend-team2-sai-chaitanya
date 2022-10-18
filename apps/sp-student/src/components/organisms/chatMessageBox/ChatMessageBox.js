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

import styles from './chatMessageBox.module.scss';
import { useOktaAuth } from '@okta/okta-react';
import { pushComment, deleteComment } from '../../../routes/serverCalls';
import { Comment } from 'antd';
import { useEffect, useState } from 'react';

const ChatMessageBox = ({ discussionId, comments, dateFormat }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const [allComments, setAllComments] = useState(comments);
  const [commentForm] = Form.useForm();
  
  //Rerender page on recieveing comments
  useEffect(() => {
    setAllComments(comments);
  }, [comments]);

  //Post Comment
  const onFinish = async (values) => {
    await pushComment(
      authState.idToken.claims.studentid,
      discussionId,
      values,
      setAllComments
    );
    commentForm.resetFields();
  };
  //Delete Comment
  const onDeleteClick = async (value) => {
    await deleteComment(value, setAllComments);
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
        {allComments && allComments.length
          ? allComments.map((comment) => { 
              
              if (comment.user.userId != authState.idToken.claims.studentid) {
                
                return (
                  <Comment
                    key={comment._id}
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
              } else {
                return (
                  <Comment
                    key={comment._id}
                    actions={[<span onClick={()=>{onDeleteClick(comment._id)}}>Delete</span>]}
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
              }
            })
          : console.log(allComments)}
      </div>
    </div>
  );
};

export default ChatMessageBox;
