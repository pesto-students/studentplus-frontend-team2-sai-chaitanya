import { Row, Col, DatePicker, TimePicker } from 'antd';
import LocaleProvider from 'antd/lib/locale-provider';
import {
  Button,
  Card,
  Input,
  Label,
  Title,
  Textarea,
  InputGroup,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
// import moment from 'moment';
import styles from './eventForm.module.scss';

const EventForm = () => {
  //state
  const isEdit = false;
  return (
    <div className={styles.eventContainer}>
      <Card className={styles.eventForm}>
        <div className={styles.cardContainer}>
          <div className={styles.title}>
            <Title level={5}>Events Editor</Title>
            <Label strong={false}>{isEdit ? 'Edit Event' : 'Add Event'}</Label>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profilefields}>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label> Event Title</Label>
                    <Input type="text" placeholder={'Event Title'} />
                  </Col>
                  <Col span={12}>
                    <Label>Cohort</Label>
                    <Input type="text" placeholder={'Cohort'} />
                  </Col>
                </Row>
                <Label strong={true}>Meeting</Label>
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>Link</Label>
                    <Input type="text" placeholder={'Link'} />
                  </Col>
                  <Col span={12}>
                    <Label>Password</Label>
                    <Input type="text" placeholder={'Password'} />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <p> Start</p>
                    <DatePicker />
                    <TimePicker />
                  </Col>
                  <Col span={12}>
                    <p> End</p>
                    <DatePicker />
                    <TimePicker />
                  </Col>
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <label>Resources</label>
                  <Input type="text" placeholder={"Meeting Resources"} />
                </Row>
                <Row gutter={8}>
                  <Title level={5} className={styles.textLabel}>
                    Event Description:
                  </Title>
                  <Textarea type="text" />
                </Row>
              </InputGroup>
              <div className={styles.buttonContainerHorizontal}>
                <Button htmltype="button" type='default' className={styles.clear}>
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

export default EventForm;
