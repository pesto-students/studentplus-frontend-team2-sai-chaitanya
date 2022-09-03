import {Radio} from "../../../../../../../libs/ui-shared/src/lib/components"
const TABLEHEADER = {
  COLUMN: [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      render: (text) => <a>{text}</a>,
    },
        {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
   
  ],
};

export { TABLEHEADER };
