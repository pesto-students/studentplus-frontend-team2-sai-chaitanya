import { Row, Col, DatePicker, TimePicker } from 'antd';
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
      <Card
        className={styles.eventForm}
        title={isEdit ? 'Edit Event' : 'Add Event'}
      >
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
                    <Input type="text" label="Event Title: " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Cohort: " />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Input type="text" label="Meeting Link: " />
                  </Col>
                  <Col span={12}>
                    <Input type="text" label="Meeting Password: " />
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
                  <Input type="text" label="Meeting Resources: " />
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

export default EventForm;
