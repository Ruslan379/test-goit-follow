import {useState, useEffect} from 'react';

import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';

import logo from 'images/logo.svg';
import picture from 'images/picture.svg'; 
import { ReactComponent as Ellipse } from 'images/ellipse.svg'; 
import rectangle from 'images/rectangle.svg';

import css from './CardItem.module.css';


export const CardItem = ({ contacts }) => {
  const contactsLength = contacts.length;

  let arrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    arrFollowers[i] = false;
  };

  const [arrTrigger, setArrTrigger] = useState(
    JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  );

  const [trigger, setTrigger] = useState(false); 

  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
  }, [arrTrigger]);

  const toggleTrigger = (id) => {
    const idNumber = Number(id) - 1;
    arrTrigger[idNumber] = !arrTrigger[idNumber];
    setArrTrigger(arrTrigger);
    setTrigger(!trigger);
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
    return 
  }

  return (
    <>
      {contacts.map(({ id, user, tweets, followers, avatar }) => (
        <li
          key={id}
          className={css.card}>
          {/* //! logo */}
          <img className={css.logo}
            alt="first logo"
            src={logo}
            width="76"
          />
          {/* //! picture */}
          <img className={css.picture}
            alt="background"
            src={picture}
            width="308"
          />
          {/* //! ellipse */}
          <Ellipse className={css.ellipse} />
          {/* //! avatar */}
          <img className={css.avatar}
            alt={user}
            src={avatar}
            width="63"
          />
          {/* //! rectangle */}
          <img className={css.rectangle}
            alt="rectangle"
            src={rectangle}
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
            <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{arrTrigger[id - 1] ? (followers + 1).toString().slice(-3) : followers.toString().slice(-3)}</span>
            {/* <span className={css.spanFollowers}>{followers.toString().slice(0, -3)},{arrTrigger[id-1] ? followers.toString().slice(-3) : followers.toString().slice(-3)}</span> */}
              &nbsp;FOLLOWERS
          </p>
          {/* //! Trigger button */}
          <ButtonTrigger
            trigger={arrTrigger[id-1]}
            toggleTrigger={() => {toggleTrigger(id)}}
            textTrue={"FOLLOWING"}
            textFalse={"FOLLOW"}
            inversionBackColor={false}
          />
        </li>
      ))}
    </>
  );
};
