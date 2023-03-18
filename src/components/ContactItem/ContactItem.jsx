import useLocalStorage from '../hooks/useLocalStorage';

//! images
import logo from 'images/logo.svg';
// import { ReactComponent as Picture } from 'images/picture2.svg';
import picture from 'images/picture2.svg'; 
// import { ReactComponent as Avatar } from 'images/boy.svg';
import avatar from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg';

//! DB contacts
// import contacts from 'db/contacts.json';

import css from './ContactItem.module.css';


export const ContactItem = ({contacts}) => {
  const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("trigger:", trigger); //!

  //! Input data
  // const tweets = 777;
  // let followers = 100500;
  //! DB contacts
  console.log("contacts --> ContactItem:", contacts); //!

  //! --------------- Преобразование 100500(100501) --> 100,500(100,501) ---------------
  // let followersString = followers.toString();
  let followersString = ""
  // // console.log("followers:", followers); //!
  // // console.log("followersString:", followersString); //!
  
  // if (trigger) {
  //   followers = followers + 1;
  //   followersString = followers.toString();
  //   // console.log("followers1:", followers); //!
  //   // console.log("followersString1:", followersString); //!
  // };

  // let followersRenderStart = followersString.slice(0, -3);
  // // console.log("followersRenderStart:", followersRenderStart); //!

  // let followersRenderEnd = followersString.slice(-3);
  // // console.log("followersRenderEnd:", followersRenderEnd); //!
  //! _______________ Преобразование 00500(100501) --> 100,500(100,501) _______________

  const toggleTrigger = (id) => {
    console.log("id:", id);
    const idNumber = Number(id) - 1;
    setTrigger(!trigger);
    console.log("idNumber:", idNumber);

    if (trigger) {
      contacts[idNumber].followers = contacts[idNumber].followers + 1;
    };
    console.log(contacts[idNumber].followers);
  };

  
  return (
    <>
      {contacts.map(({ id, user, tweets, followers }) => (
        // followersString = followers.toString(),
        // console.log(followersString),
        // followersRenderStart = followersString.slice(0, -3),
        // console.log(followersRenderStart),
        // followersRenderEnd = followersString.slice(-3),
        // console.log(followersRenderEnd),
        <div
          key={id}
          className={css.card}>
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
          {/* //! user name */}
          <p className={css.userName}
          >
            {user}
          </p>
          {/* //! tweets */}
          <p className={css.tweets}
          >
            {tweets} tweets
          </p>
          {/* //! FOLLOWERS */}
          <p className={css.followers}
          >
              {/* <span className={css.spanFollowers}>{followersRenderStart},{followersRenderEnd} </span> */}
              <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{followers.toString().slice(-3)} </span>
            FOLLOWERS
          </p>
          {/* //! Trigger button */}
          <button
            type="button"
            className={trigger ? css.btnFOLLOWING : css.btnFOLLOW}
            onClick={() => toggleTrigger(id)}
          >
            {/* FOLLOW */}
            {trigger ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      ))}
    </>
  );
};
