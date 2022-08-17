import PropTypes from 'prop-types';
import { UserOutlined } from '../icon';
import { Avatar as AntdAvatar } from 'antd';
import _noop from 'lodash/noop';

const Avatar = ({ alt, icon, onClick, size, src, shape, style }) => {
  return (
    <AntdAvatar
      alt={alt}
      icon={icon}
      shape={shape}
      size={size}
      src={src}
      style={style}
      onClick={onClick}
    />
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  size: PropTypes.number,
  src: PropTypes.string,
  shape: PropTypes.string,
  style: PropTypes.object,
};
Avatar.defaultProps = {
  alt: 'Avatar',
  icon: <UserOutlined />,
  onClick: _noop,
  size: 40,
  src: undefined,
  shape: 'circle',
  style: { display: 'block', margin: '1rem auto' },
};

export default Avatar;
