import { useState } from 'react';
import css from './App.module.css';

export const App = () => {
  let followers = 100500

  const [trigger, setTrigger] = useState(false);
  console.log("trigger:", trigger);

  if (trigger) followers = 100501

  const toggleTrigger = () => {
    setTrigger(!trigger);
    // console.log("toggleTrigger --> ", trigger);
  };

  
  
  return (

    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <p>777 tweets</p>
      <p>FOLLOWERS <span className={css.spanFollowers}>{followers}</span></p>
      <button
          type="button"
          className={css.btnFollowers}
          onClick={toggleTrigger}
      >
        FOLLOW
        {/* {isLoading ? [<Spinner size="18" />, " Editing..."] : "Edit"} */}
      </button>


     
    </div>
  );
};
