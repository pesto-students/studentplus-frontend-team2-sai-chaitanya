import Space from "../../../../../../../libs/ui-shared/src/lib/components"
const TABLEHEADER = {
  COLUMN: [
    {
      title: 'Title',
      dataIndex: 'Event Title',
      key: 'eventTitle',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Cohort ID',
      dataIndex: 'Cohort',
      key: 'cohort',
    },
    {
      title: 'Time',
      dataIndex: 'Times',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ],
};

export { TABLEHEADER };
