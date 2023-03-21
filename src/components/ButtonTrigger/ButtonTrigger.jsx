import PropTypes from 'prop-types';
import {
  Button
} from './ButtonTrigger.styled';

export const ButtonTrigger = ({
  trigger,
  toggleTrigger,
  textTrue,
  textFalse,
  inversionBackColor
}) => {

  let triggerColor = trigger;
  if (inversionBackColor) {
    triggerColor = !trigger
  };

  return (
      <Button
      type="button"
      onClick={toggleTrigger}
      triggerColor={triggerColor}
    >
      {trigger ? textTrue : textFalse}
    </Button>
  );
};

ButtonTrigger.propTypes = {
  trigger: PropTypes.bool.isRequired,
  toggleTrigger: PropTypes.func.isRequired,
  textTrue: PropTypes.string.isRequired,
  textFalse: PropTypes.string.isRequired,
  inversionBackColor: PropTypes.bool.isRequired,
};