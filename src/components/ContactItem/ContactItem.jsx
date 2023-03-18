import {
  useState,
  useEffect
} from 'react';

// import useLocalStorage from '../hooks/useLocalStorage';
// import useArrLocalStorage from '../hooks/useArrLocalStorage'; //?

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


export const ContactItem = ({ contacts }) => {
  //! DB contacts + length
  console.log("contacts --> ContactItem:", contacts); //!
  const contactsLength = contacts.length;
  console.log("contactsLength:", contactsLength); //!


  // const [arrTrigger, setArrTrigger] = useArrLocalStorage("ArrFollowers", ArrFollowers);

  // const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("ContactItem --> trigger:", trigger); //!

  //! ArrFollowers - массив, наполняющий Local Storage дефолтными значениями = false
  let ArrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    ArrFollowers[i] = false;
    // localStorage.setItem("ArrFollowers", JSON.stringify(ArrFollowers));
  };
  console.log("ArrFollowers:", ArrFollowers); //!

  // const localStorageStart = JSON.parse(localStorage.getItem("ArrFollowers")) ?? []
  // console.log("localStorageStart:", localStorageStart); //!

  // if (arrTrigger.length)
    
  const [arrTrigger, setArrTrigger] = useState(() => {
    return JSON.parse(localStorage.getItem("ArrFollowers")) ?? ArrFollowers
  });
  // console.log("arrTrigger:", arrTrigger); //!

  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
  }, [arrTrigger]);

  // const localStorageGet = JSON.parse(localStorage.getItem("ArrFollowers"))
  // console.log("localStorageGet:", localStorageGet); //!

  console.log("arrTrigger ПОСЛЕ:", arrTrigger); //!


  //?----------------------------------------------------------------
  const toggleTrigger = (id) => {

    console.log("id:", id);
    const idNumber = Number(id) - 1;
    console.log("idNumber:", idNumber);

    setArrTrigger(!arrTrigger.idNumber);

    if (arrTrigger.idNumber) {
      contacts[idNumber].followers = contacts[idNumber].followers - 1;
    } else {
      contacts[idNumber].followers = contacts[idNumber].followers + 1;
    };
    console.log(contacts[idNumber].followers);

    for (let i = 0; i < contactsLength; i += 1) {
      if (i === idNumber) {
        console.log("i:", i); //!
        console.log("idNumber:", idNumber); //!
        arrTrigger[i] = !arrTrigger[i]
        console.log(`toggleTrigger --> arrTrigger{i}:`, arrTrigger[i]); //!
        console.log("toggleTrigger --> arrTrigger:", arrTrigger); //!
        setArrTrigger(arrTrigger);
        return
      }
    };
  };



  return (
    <>
      {/* {contacts.map(({ id, user, tweets, followers }) => ( */}
      {contacts.map((
        contact,
        // trigger,
        // toggleTrigger
      ) => (
        // idNumber = Number(contact.id) - 1,
        // console.log(idNumber),
        // console.log(contact),
        // const id = contact.id,
        // { id, user, tweets, followers } = contact,

        // followersString = followers.toString(),
        // console.log(followersString),
        // followersRenderStart = followersString.slice(0, -3),
        // console.log(followersRenderStart),
        // followersRenderEnd = followersString.slice(-3),
        // console.log(followersRenderEnd),
        <div
          key={contact.id}
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
            {contact.user}
          </p>
          {/* //! tweets */}
          <p className={css.tweets}
          >
            {contact.tweets} tweets
          </p>
          {/* //! FOLLOWERS */}
          <p className={css.followers}
          >
              {/* <span className={css.spanFollowers}>{followersRenderStart},{followersRenderEnd} </span> */}
              <span className={css.spanFollowers}>{contact.followers.toString().slice(0, -3)},{contact.followers.toString().slice(-3)} </span>
            FOLLOWERS
          </p>
          {/* //! Trigger button */}
          <button
            type="button"
            // className={trigger ? css.btnFOLLOWING : css.btnFOLLOW}
            onClick={() => {toggleTrigger(contact.id)}}
          >
            FOLLOW
            {/* {trigger ? "FOLLOWING" : "FOLLOW"} */}
          </button>
        </div>
      ))}
    </>
  );
};
