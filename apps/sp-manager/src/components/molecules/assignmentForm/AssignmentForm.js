import {
  Button,
  Card,
  Col,
  Input,
  Label,
  Row,
  Select,
  Title,
  Textarea,
  InputGroup,
} from '../../../../../../libs/ui-shared/src/lib/components/atoms';
// import moment from 'moment';
import styles from './assignmentForm.module.scss';

const AssignmentForm = () => {
  //state
  const isEdit = false;
  const weekData = ['Week1', 'Week2'];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
              <InputGroup size="large">
                <Row gutter={8}>
                  <Label> Assignment Title</Label>
                  <Input type="text" placeholder={'Assignment Title'} />
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
                  <Label>Assignment Link</Label>
                  <Input type="text" placeholder={'Link'} />
                </Row>
              </InputGroup>
              <InputGroup size="large">
                <Row gutter={8}>
                  <Col span={12}>
                    <Label>Assignment link</Label>
                    <Input type="text" placeholder={'Assignment file Link'} />
                  </Col>
                  <Col span={12}>
                    <Label>Select Week</Label>
                    <Select
                      defaultValue={weekData[0]}
                      options={weekData}
                      onChange={handleChange}
                      
                    />
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

export default AssignmentForm;
