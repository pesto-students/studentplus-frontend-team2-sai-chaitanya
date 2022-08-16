import { Typography } from 'antd';
import styles from './typography.module.scss';

const { Text } = Typography;

const Label = ({ children, className, strong = true, type = 'secondary' }) => {
  return (
    <Text strong={strong} className={className} type={type}>
      {children}
    </Text>
  );
};

export default Label;
