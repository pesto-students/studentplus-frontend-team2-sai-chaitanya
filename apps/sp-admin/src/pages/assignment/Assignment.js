import React, { useMemo, useState } from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
  Select,
  Option,
} from '../../../../../libs/ui-shared/src/lib/components';
import styles from './assignment.module.scss';

const weekData = [
  {
    key: 0,
    id: 'week1',
    name: 'Week 1',
  },
  {
    key: 1,
    id: 'week2',
    name: 'Week 2',
  },
];
const getAssignmentsByWeek = (week) => {
  const assign = assignmentData.filter((assignment) => {
    return assignment.week == week;
  });
  return assign;
};
const assignmentData = [
  {
    key: 0,
    id: 'assignment1w1',
    name: 'Assignment 1 ( Week 1 )',
    week: 'week1',
  },
  {
    key: 1,
    id: 'assignment2w1',
    name: 'Assignment 2 ( Week 1 )',
    week: 'week1',
  },
  {
    key: 2,
    id: 'assignment3w1',
    name: 'Assignment 3 ( Week 1 )',
    week: 'week1',
  },
  {
    key: 0,
    id: 'assignment1w2',
    name: 'Assignment 1 ( Week 2 )',
    week: 'week2',
  },
  {
    key: 2,
    id: 'assignment2w2',
    name: 'Assignment 2 ( Week 2 )',
    week: 'week2',
  },
  {
    key: 3,
    id: 'assignment3w2',
    name: 'Assignment 3 ( Week 2 )',
    week: 'week2',
  },
];

const Assignment = ({ hideNavbar, scale, url }) => {
  const [assignments, setAssignments] = useState(getAssignmentsByWeek('week1'));

  const [pdfUrl, setpdfUrl] = useState(
    'https://arxiv.org/pdf/quant-ph/0410100.pdf'
  );

  const handleWeekChange = (value) => {
	const assigns = getAssignmentsByWeek(value);
	setAssignments(assigns);
  };

  const onSecondWeekChange = (value) => {
console.log();
  };
  const newUrl = useMemo(() => ({ url: pdfUrl }));
  return (
    <div className={styles.assignmentCover}>
      <Row>
        <Col span={8} xs={24} md={8}>
          <Select
            defaultValue={weekData[0].id}
            onChange={handleWeekChange}
          >
            {weekData !== undefined
              ? weekData.map((res) => {
                  return (
                    <Option key={res.key} value={res.id}>
                      {res.name}
                    </Option>
                  );
                })
              : ''}
          </Select>
        </Col>
        <Col span={8} xs={24} md={8}>
          <Select onChange={onSecondWeekChange}>
            {assignments !== undefined
              ? assignments.map((res) => {
                  return (
                    <Option key={res.key} value={res.id}>
                      {res.name}
                    </Option>
                  );
                })
              : ''}
          </Select>
        </Col>
        <Col span={8} xs={24} md={8}>
          <Button htmlType="button" className={styles.viewButton}>
            View Assignment
          </Button>
        </Col>
      </Row>
      <div className={styles.assignmentContent}>
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
