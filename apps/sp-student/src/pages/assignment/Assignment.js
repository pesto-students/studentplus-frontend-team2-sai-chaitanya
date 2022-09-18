import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { PDFReader } from 'reactjs-pdf-reader'
import {
  Button,
  Row,
  Col,
  Select,
  Option,
} from '../../../../../libs/ui-shared/src/lib/components';
import Pdf from '../../../../../libs/ui-shared/public/sample.pdf';
import styles from './assignment.module.scss';
import {
  getAssignmentsByWeek,
  getAssignmentsFile,
} from '../../routes/serverCalls';

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
  const [assignments, setAssignments] = useState();
  const [newUrl, setNewUrl] = useState('');
  console.log("seassign", assignments);
useEffect(() => {
  console.log('weeksAssign', getAssignmentsByWeek('week1'));
  const assigns = getAssignmentsByWeek('week1').then((resp) => {
    return resp.data;
  });
  assigns.then((response)=>{
	setAssignments(response);
  });
}, []);

  const [pdfUrl, setpdfUrl] = useState(
    'https://arxiv.org/pdf/quant-ph/0410100.pdf'
  );

  const handleWeekChange = (value) => {
	const assigns = getAssignmentsByWeek(value);
	setAssignments(assigns);
  };

  const onSecondWeekChange = (value) => {
	const selectAssignment = assignments.filter((assignment)=>{
		return assignment._id == value._id;
	})
console.log("retunUrl", getAssignmentsFile(selectAssignment.deckLink));
getAssignmentsFile(selectAssignment.deckLink).then((resp)=>{
	setNewUrl(resp.data);
});
  };
  return (
    <div className={styles.assignmentCover}>
      <Row>
        <Col span={8} xs={24} md={8}>
          <Select defaultValue={weekData[0].id} onChange={handleWeekChange}>
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
          <Select
            onChange={onSecondWeekChange}
            defaultValue="Select Assignment"
          >
            {assignments !== undefined
              ? assignments.map((res) => {
                  return (
                    <Option key={res._id} value={res._id}>
                      {res.assignmentTitle}
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
        <PDFReader url="https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK" />
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
