import { Skeleton, Typography } from 'antd';

const Title = ({ children, className, level }) => {
  return (
    <Typography.Title level={level} className={className}>
      {children ? children : <Skeleton.Input active />}
    </Typography.Title>
  );
};

Title.propTypes = {
  children: PropTypes.number,
  className: PropTypes.string,
  level: PropTypes.string,
};

Title.defaultProps = {
  children: undefined,
  className: '',
  level: 5,
};

export default Title;
