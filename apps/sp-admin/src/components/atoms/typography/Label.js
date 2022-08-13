import { Typography } from 'antd';

const { Text } = Typography;

const Label = ({ children }) => {
  return <Text strong>{children}</Text>;
};

export default Label;
