import PropTypes from 'prop-types';
import { UserOutlined } from '../icon';
import { Avatar as AntdAvatar } from 'antd';
import _noop from 'lodash/noop';
import userImage from '../../../../../public/images/userImage.png';

const Avatar = ({ alt, onClick, size, src, shape, style }) => {
  return (
    <AntdAvatar
      alt={alt}
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
  onClick: PropTypes.func,
  size: PropTypes.number,
  src: PropTypes.string,
  shape: PropTypes.string,
  style: PropTypes.object,
};
Avatar.defaultProps = {
  alt: 'Avatar',
  onClick: _noop,
  size: 40,
  src: userImage,
  shape: 'circle',
  style: { display: 'block', margin: '1rem auto' },
};

export default Avatar;
