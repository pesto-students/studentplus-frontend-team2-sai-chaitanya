import { Select as AntDSelect } from 'antd';
import {_noop} from 'lodash'
import PropTypes from 'prop-types';
import styles from './select.module.scss';
const defaultClassName = styles.selectbox;
const Select = ({
  options,
  className,
  onChange,
  style,
  value,
  ...otherProps
}) => {
  return (
    <AntDSelect
      {...otherProps}
      onChange={onChange}
      style={style}
      className={className}
    >
      {options.map((option) => (
        <AntDSelect.Option key={option.id}>{option.name}</AntDSelect.Option>
      ))}
    </AntDSelect>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

Select.defaultProps = {
  options: [],
  className: defaultClassName,
  onChange: _noop,
  style: {
    width: '100%',
  },
};

export default Select;
