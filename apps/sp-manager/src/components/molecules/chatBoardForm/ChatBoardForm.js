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
      <Card className={styles.form}>
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Chatboards Editor</Title>
            <Label strong={false}>
              {isEdit ? 'Edit Chatboard' : 'Add Chatboard'}
            </Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Label> Chatboard Title</Label>
                  <Input type="text" placeholder={'Chatboard Title'} />
                </Row>
                <Row gutter={8}>
                  <Label>Cohort</Label>
                  <Input type="text" placeholder={'Cohort'} />
                </Row>
                <Row gutter={8}>
                  <Label>Description</Label>
                  <Textarea type="text" placeholder={'Add Description'} />
                </Row>
                <Row gutter={8}>
                  <Label>Chatboard Link</Label>
                  <Input type="text" placeholder={'Link'} />
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <label>Resources</label>
                <Row gutter={8}>
                  <Col span={12}>
                    <label>Deck link</label>
                    <Input type="text" placeholder={'Meeting Deck Link'} />
                  </Col>
                  <Col span={12}>
                    <label>Assignment 1</label>
                    <Input type="text" placeholder={'Assignment Link'} />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <label>Assignment 2</label>
                    <Input type="text" placeholder={'Meeting Deck Link'} />
                  </Col>
                  <Col span={12}>
                    <label>Assignment 3</label>
                    <Input type="text" placeholder={'Assignment Link'} />
                  </Col>
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <Button
                  htmltype="button"
                  type="default"
                  className={styles.clear}
                >
                  Clear
                </Button>
                <Button htmltype="submit" className={styles.save}>
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
