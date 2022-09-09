import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import styles from './userBox.module.scss';

const UserBox = ({userName,onClickAction}) => {
  console.log(userName);
  return <Card className={styles.container} onClick={onClickAction}>{userName}</Card>;
};

UserBox.propTypes = {
  userName : PropTypes.string,
  onClickAction : PropTypes.func,
}

UserBox.defaultProps = {
  userName : 'Student',
  onClickAction : _noop,
}
export default UserBox;
