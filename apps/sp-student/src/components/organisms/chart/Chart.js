import React from 'react';
import { Pie } from '@ant-design/charts';

const Chart = () => {
  const data = [
    {
      type: 'Absent',
      value: 27,
    },
    {
      type: 'Absent w/notice',
      value: 25,
    },
    {
      type: 'Present',
      value: 18,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default Chart;
