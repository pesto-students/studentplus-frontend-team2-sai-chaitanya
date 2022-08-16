import { UserOutlined } from '../icon';
import { Avatar as AntdAvatar } from 'antd';

const Avatar = ({ size, src }) => {
  return (
    <AntdAvatar
      alt="Avatar"
      icon={<UserOutlined />}
      shape="circle"
      size={size}
      src={src}
      style={{ display: 'block', margin: '1rem auto' }}
    />
  );
};

export default Avatar;
