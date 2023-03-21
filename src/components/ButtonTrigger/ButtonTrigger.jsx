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
