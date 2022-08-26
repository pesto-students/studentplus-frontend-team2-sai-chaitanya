import {
  Button,
  Card,
  Col,
  Input,
  Label,
  Row,
  Title,
  Textarea,
  InputGroup,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
// import moment from 'moment';
import styles from './chatBoardForm.module.scss';

const ChatBoardForm = () => {
  //state
  const isEdit = false;
  return (
    <div className={styles.container}>
      <Card
        className={styles.form}
        title={isEdit ? 'Edit Chatboard' : 'Add Chatboard'}
      >
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Chat Board Editor</Title>
            <Label strong={false}>{isEdit ? 'Edit Chatboard' : 'Add Chatboard'}</Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={24}>
                    <Input type="text" addonBefore={<Label>Chat Board Title</Label>} />
                  </Col>
                </Row>
                <Row gutter={8}>
                <Col span={24}>
                    <Input type="text" addonBefore={<Label>Cohort</Label>} />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="Media Link: " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Assignment 1: " />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="Assignment 2: " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Assignment 3: " />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Input type="text" label="Event Deck Link: " />
                </Row>
                <Row gutter={8}>
                  <Title level={5} className={styles.textLabel}>
                    Event Description:
                  </Title>
                  <Textarea type="text" />
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <Button type="button" className={styles.clear}>
                  Clear
                </Button>
                <Button type="submit" className={styles.save}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatBoardForm;
