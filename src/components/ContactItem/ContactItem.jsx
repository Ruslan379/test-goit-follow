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
  // console.log("contacts --> ContactItem:", contacts); //!
  const contactsLength = contacts.length;
  console.log("contactsLength:", contactsLength); //!


  // const [arrTrigger, setArrTrigger] = useArrLocalStorage("ArrFollowers", arrFollowers);

  // const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("ContactItem --> trigger:", trigger); //!


  const [contactFollowers, setContactFollowers] = useState(null);

  //! arrFollowers - массив, наполняющий Local Storage дефолтными значениями = false
  let arrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    arrFollowers[i] = false;
    // localStorage.setItem("ArrFollowers", JSON.stringify(arrFollowers));
  };
  // console.log("ArrFollowers:", arrFollowers); //!

  // const localStorageStart = JSON.parse(localStorage.getItem("ArrFollowers")) ?? []
  // console.log("localStorageStart:", localStorageStart); //!


  // const [arrTrigger, setArrTrigger] = useState(() => {
  //   return JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  // });

  const [arrTrigger, setArrTrigger] = useState(
    JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  );

  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
    console.log("ЗАПИСЬ в Local Storage:", arrTrigger);

    const localStorageGet = JSON.parse(localStorage.getItem("ArrFollowers"))
    console.log("ЧТЕНИЕ из Local Storage:", localStorageGet); //!
  }, [arrTrigger]);

  // const localStorageGet = JSON.parse(localStorage.getItem("ArrFollowers"))
  // console.log("ЧТЕНИЕ из Local Storage:", localStorageGet); //!

  console.log("arrTrigger ПОСЛЕ:", arrTrigger); //!


  //?----------------------------------------------------------------
  // let contactFollowers = null
  const toggleTrigger = (id) => {
    console.log("id:", id); //!
    const idNumber = Number(id) - 1;
    console.log("idNumber:", idNumber); //!

    setArrTrigger(!arrTrigger.idNumber);

    if (arrTrigger[idNumber]) {
      console.log("TRUE-->arrTrigger[idNumber]:", arrTrigger[idNumber]); //!
      contacts[idNumber].followers = contacts[idNumber].followers - 1;
    } else {
      console.log("FALSE-->arrTrigger[idNumber]:", arrTrigger[idNumber]); //!
      contacts[idNumber].followers = contacts[idNumber].followers + 1;
    };
    console.log(contacts[idNumber].followers); //!
    setContactFollowers(contacts[idNumber].followers) 
    // console.log("contactFollowers:", contactFollowers);

    for (let i = 0; i < contactsLength; i += 1) {
      if (i === idNumber) {
        console.log("i:", i); //!
        console.log("idNumber:", idNumber); //!
        arrTrigger[i] = !arrTrigger[i]
        console.log(`toggleTrigger --> arrTrigger[${i}]:`, arrTrigger[i]); //!
        console.log("toggleTrigger --> arrTrigger:", arrTrigger); //!
        setArrTrigger(arrTrigger);
        localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
        return
      }
    };
  };

  console.log("contactFollowers:", contactFollowers); //!

  // let followersRenderStart = "";
  // let followersRenderEnd = "";
  // let followersRenderAll = "";


  return (
    <>
      {contacts.map(({ id, user, tweets, followers }) => (
        // followersRenderStart = followers.toString().slice(0, -3),
        // followersRenderEnd = followers.toString().slice(-3),
        // followersRenderAll = `${followersRenderStart} ${followersRenderEnd}`,
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
            {/* <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{followers.toString().slice(-3)}</span> */}
            <span
              className={css.spanFollowers}
            >
              {arrTrigger[id - 1]
                ?
                  [followers.toString().slice(0, -3), (followers + 1).toString().slice(-3)]
                  // followersRenderAll
                :
                [followers.toString().slice(0, -3), followers.toString().slice(-3)]
              }
            </span>
              &nbsp;FOLLOWERS
          </p>
          {/* //! Trigger button */}
          <button
            type="button"
            className={arrTrigger[id-1] ? css.btnFOLLOWING : css.btnFOLLOW}
            onClick={() => {toggleTrigger(id)}}
          >
            {/* FOLLOW */}
            {arrTrigger[id-1] ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      ))}
    </>
  );
};
