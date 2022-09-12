import { Select as AntDSelect } from 'antd';
import {_noop} from 'lodash'
import PropTypes from 'prop-types';
import styles from './select.module.scss';
const { Option } = AntDSelect;
const defaultClassName = styles.selectbox;
const Select = ({
  className,
  onChange,
  style,
  children,
  ...otherProps
}) => {
  return (
    <AntDSelect
      {...otherProps}
      onChange={onChange}
      style={style}
      className={className}
    >
      {children}
    </AntDSelect>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

Select.defaultProps = {
  className: defaultClassName,
  onChange: _noop,
  style: {
    width: '100%',
  },
};

export { Select, Option };
