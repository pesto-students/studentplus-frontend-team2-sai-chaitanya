import { Button, Dropdown as AntdDropdown } from 'antd';

const Dropdown = ({ menu, targetElement }) => {
  return (
    <AntdDropdown
      overlay={menu}
      placement="bottomRight"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <div onClick={(e) => e.preventDefault()}>{targetElement}</div>
    </AntdDropdown>
  );
};

export default Dropdown;
