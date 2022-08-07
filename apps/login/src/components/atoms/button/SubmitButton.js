import { Button  } from '@mui/material';
import PropTypes from 'prop-types';

const SubmitButton = ({ value }) => {
  return (
    <div className="inputCover">
    <Button variant="contained" type="submit">{ value }</Button>
    </div>
  )
}

SubmitButton.protoTypes = {
  value : PropTypes.string.isRequired,
  type : PropTypes.string
}

SubmitButton.defaultProps = {
  value : "Submit",
  type : "submit"
}

export default SubmitButton