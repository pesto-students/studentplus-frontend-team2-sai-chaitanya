import { Select as AntDSelect } from 'antd';
import PropTypes from 'prop-types';

const Select = ({ options, defaultValue, onChange, style, value }) => {
  return (
    <AntDSelect
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
      value={value}
    >
      {options.map((option) => (
        <AntDSelect.Option key={option}>{option}</AntDSelect.Option>
      ))}
    </AntDSelect>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  defaultValue: 'Select',
  onChange: () => {},
  style: {
    width: '100%',
  },
  value: '',
};

export default Select;
