

import css from './ButtonTrigger.module.css';


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

  console.log("ButtonTrigger-->trigger:", trigger); //!
  console.log("ButtonTrigger-->textTrue:", textTrue); //!
  console.log("ButtonTrigger-->textFalse:", textFalse); //!



  return (
      <button
          type="button"
          className={triggerColor ? css.btnTrue : css.btnFalse}
          onClick={toggleTrigger}
      >
        {trigger ? textTrue : textFalse}
      </button>
  );
};
