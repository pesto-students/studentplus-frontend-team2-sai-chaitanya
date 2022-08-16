import { Typography } from 'antd';
import styles from './typography.module.scss';
import PropTypes from 'prop-types';

const { Text } = Typography;

const Label = ({ children, className, strong, type }) => {
  return (
    <Text strong={strong} className={className} type={type}>
      {children}
    </Text>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  strong: PropTypes.bool,
  type: PropTypes.string,
};

Label.defaultProps = {
  children: undefined,
  className: '',
  strong: false,
  type: '',
};

export default Label;
