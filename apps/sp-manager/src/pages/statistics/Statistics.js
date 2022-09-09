import React from 'react';
import { Chart } from '../../components';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sortDirections: ['descend'],
  },
  {
    title: 'Week',
    dataIndex: 'week',
    defaultSortOrder: 'descend',
  },
  {
    title: 'Session Title',
    dataIndex: 'session_title',
  },
  {
    title: 'Attendence',
    dataIndex: 'attendence',
  },
];
const data = [
  {
    key: '1',
    id: '8992',
    week: '1st',
    session_title: 'Life Skill Session - Week 1',
    attendence: 'Present',
  },
  {
    key: '1',
    id: '8992',
    week: '1st',
    session_title: 'Life Skill Session - Week 1',
    attendence: 'Present',
  },
  {
    key: '1',
    id: '8992',
    week: '1st',
    session_title: 'Life Skill Session - Week 1',
    attendence: 'Present',
  },
  {
    key: '1',
    id: '8992',
    week: '1st',
    session_title: 'Life Skill Session - Week 1',
    attendence: 'Present',
  },
];

const Statistics = () => {
  return (
    <>
      <Chart />
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Statistics;
