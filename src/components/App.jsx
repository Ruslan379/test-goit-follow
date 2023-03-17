import useLocalStorage from './hooks/useLocalStorage';

//! images
import logo from 'images/logo.svg';
// import { ReactComponent as Picture } from 'images/picture2.svg';
import picture from 'images/picture2.svg'; 
// import { ReactComponent as Avatar } from 'images/boy.svg';
import avatar from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg'; 

import css from './App.module.css';


export const App = () => {
  const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("trigger:", trigger); //!
  
  let followers = 500;
  const tweets = 777;

  if (trigger) followers = 501;

  const toggleTrigger = () => {
    setTrigger(!trigger);
  };

  
  return (
    <div className={css.card}>
      {/* //! logo */}
      <img className={css.logo}
          src={logo}
        alt=""
        width="76"
      />
      {/* //! picture */}
      {/* <Picture className={css.picture} /> */}
      <img className={css.picture}
                src={picture}
                alt="" width="308"
            />
      {/* //! avatar */}
      {/* <Avatar className={css.avatar} /> */}
      <img className={css.avatar}
          src={avatar}
        alt=""
        width="80"
      />
      {/* //! rectangle */}
      <img className={css.rectangle}
          src={rectangle}
        alt=""
        width="380"
      />
      {/* //! tweets */}
      <p className={css.tweets}
      >
        {tweets} tweets
      </p>
      {/* //! FOLLOWERS */}
      <p className={css.followers}
      >
        <span className={css.spanFollowers}>100,{followers} </span>
        FOLLOWERS
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
