import { Skeleton, Typography } from 'antd';

const Title = ({ children, className, level }) => {
  return (
    <Typography.Title level={level} className={className}>
      {children ? children : <Skeleton.Input active />}
    </Typography.Title>
  );
};

export default Title;
