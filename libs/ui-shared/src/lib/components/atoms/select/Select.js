import { Select as AntDSelect } from 'antd';
import PropTypes from 'prop-types';
import styles from './select.module.scss';
const defaultClassName = styles.selectbox;
const Select = ({
  options,
  defaultValue,
  className,
  onChange,
  style,
  value,
}) => {
  return (
    <AntDSelect
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
      // value={value}
      className={className}
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
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  defaultValue: 'Select',
  className: defaultClassName,
  onChange: () => {},
  style: {
    width: '100%',
  },
  value: '',
};

export default Select;
