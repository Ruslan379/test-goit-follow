// import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import css from './App.module.css';


export const App = () => {
  const [trigger, setTrigger] = useLocalStorage("LocalFollowers", false);
  // console.log("trigger:", trigger); //!
  
  let followers = 500

  // const [trigger, setTrigger] = useState(followersStorage);
  // console.log("trigger:", trigger); //!

  // if (trigger) followers = 501;
  if (trigger) followers = 501;

  const toggleTrigger = () => {
    // setTrigger(!trigger);
    // setFollowersStorage(!trigger);
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
      <p>FOLLOWERS <span className={css.spanFollowers}>100,{followers}</span></p>
      <button
          type="button"
        // className={css.btnFollowers}
        className={trigger ? css.btnFOLLOWING : css.btnFOLLOW}
          onClick={toggleTrigger}
      >
        {/* FOLLOW */}
        {trigger ? "FOLLOWING" : "FOLLOW"}
      </button>
    </div>
  );
};
