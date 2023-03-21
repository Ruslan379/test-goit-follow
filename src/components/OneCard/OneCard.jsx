import useLocalStorage from '../hooks/useLocalStorage';

import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';

import logo from 'images/logo.svg';
import picture from 'images/picture2.svg'; 
import avatar from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg'; 

import css from './OneCard.module.css';


export const OneCard = () => {
  const [triggerOneCard, setTriggerOneCard] = useLocalStorage("TriggerOneCard", false);

  //! Input data
  const tweets = 777;
  let followers = 100500;

  //! --------------- Преобразование 100500(100501) --> 100,500(100,501) ---------------
  let followersString = followers.toString();
  if (triggerOneCard) {
    followers = followers + 1;
    followersString = followers.toString();
  };
  let followersRenderStart = followersString.slice(0, -3);
  let followersRenderEnd = followersString.slice(-3);
  //! _______________ Преобразование 00500(100501) --> 100,500(100,501) _______________

  const toggleTriggerOneCard = () => {
    setTriggerOneCard(!triggerOneCard);
  };

  return (
    <div className={css.card}>
      {/* //! logo */}
      <img className={css.logo}
        alt="first logo"
        src={logo}
        width="76"
      />
      {/* //! picture */}
      <img className={css.picture}
        alt="second logo"
        src={picture}
        width="308"
      />
      {/* //! avatar */}
      <img className={css.avatar}
        alt="avatar"
        src={avatar}
        width="80"
      />
      {/* //! rectangle */}
      <img className={css.rectangle}
        alt="rectangle"
        src={rectangle}
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
      <ButtonTrigger
        trigger={triggerOneCard}
        toggleTrigger={toggleTriggerOneCard}
        textTrue={"FOLLOWING"}
        textFalse={"FOLLOW"}
        inversionBackColor={false}
      />
    </div>
  );
};