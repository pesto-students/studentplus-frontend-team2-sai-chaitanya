import { Button, Dropdown as AntdDropdown } from 'antd';
import PropTypes from 'prop-types';

const Dropdown = ({ arrow, menu, placement, targetElement }) => {
  return (
    <AntdDropdown overlay={menu} placement={placement} arrow={arrow}>
      <div onClick={(e) => e.preventDefault()}>{targetElement}</div>
    </AntdDropdown>
  );
};

Dropdown.propTypes = {
  arrow: PropTypes.object,
  menu: PropTypes.string,
  placement: PropTypes.string,
  targetElement: PropTypes.node,
};

Dropdown.defaultProps = {
  arrow: {
    pointAtCenter: true,
  },
  menu: undefined,
  placement: 'bottomRight',
  targetElement: undefined,
};

export default Dropdown;
