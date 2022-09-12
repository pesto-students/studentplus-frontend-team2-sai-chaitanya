import React, { useMemo, useState } from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
  Select,
} from '../../../../../libs/ui-shared/src/lib/components';
import Pdf from '../../../../../libs/ui-shared/public/sample.pdf';
import styles from './assignment.module.scss';

const weekData = ['Week1', 'Week2'];
const assignmentData = {
  Week1: ['Week1Assignment1', 'Week1Assignment2', 'Week1Assignment3'],
  Week2: ['Week2Assignment1', 'Week2Assignment2', 'Week2Assignment3'],
};

const Assignment = ({ hideNavbar, scale, url }) => {
  const [assignments, setAssignments] = useState(assignmentData[weekData[0]]);
  const [secondAssignment, setSecondAssignment] = useState(
    assignmentData[weekData[0]][0]
  );
  const [selectedWeek, setselectedWeek] = useState(weekData[0]);
  const [pdfUrl, setpdfUrl] = useState(
    'https://arxiv.org/pdf/quant-ph/0410100.pdf'
  );

  const handleWeekChange = (value) => {
    setAssignments(assignmentData[value]);
    setSecondAssignment(assignmentData[value][0]);
    setselectedWeek(value);
  };

  const onSecondWeekChange = (value) => {
    setSecondAssignment(value);
    setpdfUrl(Pdf);
  };
  const newUrl = useMemo(() => ({ url: pdfUrl }));
  return (
    <div className={styles.assignmentCover}>
        <Row>
          <Col span={8} xs={24} md={8}>
            <Select
              defaultValue={weekData[0]}
              onChange={handleWeekChange}
              options={weekData}
              value={selectedWeek}
            />
          </Col>
          <Col span={8} xs={24} md={8}>
            <Select
              onChange={onSecondWeekChange}
              options={assignments}
              value={secondAssignment}
            />
          </Col>
          <Col span={8} xs={24} md={8}>
            <Button htmlType="button" className={styles.viewButton}>View Assignment</Button>
          </Col>
        </Row>
      <div clasName={styles.assignmentContent}>
        <PDFViewer document={newUrl} scale={scale} hideNavbar={hideNavbar} />
      </div>
    </div>
  );
};

Assignment.propTypes = {
  hideNavbar: PropTypes.bool,
  scale: PropTypes.number,
  url: PropTypes.string,
};

Assignment.defaultProps = {
  hideNavbar: true,
  scale: 1.5,
  url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
};

export default Assignment;
