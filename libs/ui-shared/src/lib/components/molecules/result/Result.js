import { Button, Result as AntdResult } from 'antd';

const Result = () => (
  <AntdResult
    status="403"
    title="403"
    subTitle="Sorry, you do not belongs to this app."
    extra={<Button type="primary" htmlType="link" href={window.location.origin}>Back Home</Button>}
  />
);

export default Result;
