import PropTypes from 'prop-types';
import { UserOutlined } from '../icon';
import { Avatar as AntdAvatar } from 'antd';

const Avatar = ({ alt, icon, size, src, shape, style }) => {
  return (
    <AntdAvatar
      alt={alt}
      icon={icon}
      shape={shape}
      size={size}
      src={src}
      style={style}
    />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  icon: PropTypes.element,
  size: PropTypes.number,
  src: PropTypes.string,
  shape: PropTypes.string,
  style: PropTypes.object,
};
Avatar.defaultProps = {
  alt: 'Avatar',
  icon: <UserOutlined />,
  size: 40,
  src: undefined,
  shape: 'circle',
  style: { display: 'block', margin: '1rem auto' },
};

export default Avatar;
