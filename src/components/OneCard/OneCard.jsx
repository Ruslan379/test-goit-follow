import useLocalStorage from '../hooks/useLocalStorage';

//! images
import logo from 'images/logo.svg';
// import { ReactComponent as Picture } from 'images/picture2.svg';
import picture from 'images/picture2.svg'; 
// import { ReactComponent as Avatar } from 'images/boy.svg';
import avatar from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg'; 

import css from './OneCard.module.css';


export const OneCard = () => {
  const [triggerOneCard, setTriggerOneCard] = useLocalStorage("TriggerOneCard", false);
  console.log("triggerOneCard:", triggerOneCard); //!

  //! Input data
  const tweets = 777;
  let followers = 100500;

  //! --------------- Преобразование 100500(100501) --> 100,500(100,501) ---------------
  let followersString = followers.toString()
  // console.log("followers:", followers); //!
  // console.log("followersString:", followersString); //!
  
  if (triggerOneCard) {
    followers = followers + 1;
    followersString = followers.toString();
    // console.log("followers1:", followers); //!
    // console.log("followersString1:", followersString); //!
  };

  let followersRenderStart = followersString.slice(0, -3);
  // console.log("followersRenderStart:", followersRenderStart); //!

  let followersRenderEnd = followersString.slice(-3);
  // console.log("followersRenderEnd:", followersRenderEnd); //!
  //! _______________ Преобразование 00500(100501) --> 100,500(100,501) _______________

  const toggleTriggerOneCard = () => {
    setTriggerOneCard(!triggerOneCard);
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
        <span className={css.spanFollowers}>{followersRenderStart},{followersRenderEnd} </span>
        FOLLOWERS
      </p>
      {/* //! Trigger button */}
      <button
          type="button"
          className={triggerOneCard ? css.btnFOLLOWING : css.btnFOLLOW}
          onClick={toggleTriggerOneCard}
      >
        {/* FOLLOW */}
        {triggerOneCard ? "FOLLOWING" : "FOLLOW"}
      </button>
    </div>
  );
};