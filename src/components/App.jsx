import useLocalStorage from './hooks/useLocalStorage';

//! images
import { ReactComponent as Picture } from 'images/picture2.svg';
import logo from 'images/logo.svg'; //?
// import { ReactComponent as Avatar } from 'images/boy.svg';
import avatar from 'images/boy.svg'; //?

import css from './App.module.css';


export const App = () => {
  const [trigger, setTrigger] = useLocalStorage("LocalFollowers", false);
  // console.log("trigger:", trigger); //!
  
  let followers = 500;
  const tweets = 777;

  if (trigger) followers = 501;

  const toggleTrigger = () => {
    setTrigger(!trigger);
  };

  
  return (
    <div className={css.card}>

      <img className={css.logo}
          src={logo}
        alt=""
        width="76"
      />

      <Picture className={css.picture} />
      {/* <img className={css.picture}
                src={defaultAvatar}
                alt="" width="308"
            /> */}

      {/* <Avatar className={css.avatar} /> */}
      <img className={css.avatar}
          src={avatar}
        alt=""
        width="80"
      />
      
      {/* //! tweets */}
      <p className={css.tweets}
      >
        {tweets} tweets
      </p>
      {/* //! FOLLOWERS */}
      <p className={css.followers}
      >
        FOLLOWERS
        <span className={css.spanFollowers}> 100,{followers}</span>
      </p>
      {/* //! Trigger button */}
      <button
          type="button"
        className={trigger ? css.btnFOLLOWING : css.btnFOLLOW}
          onClick={toggleTrigger}
      >
        {/* FOLLOW */}
        {trigger ? "FOLLOWING" : "FOLLOW"}
      </button>
    </div>
  );
};
