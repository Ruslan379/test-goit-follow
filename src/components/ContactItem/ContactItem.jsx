import {useState, useEffect} from 'react';

import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';

import logo from 'images/logo.svg';
import picture from 'images/picture2.svg'; 
import avatar from 'images/boy.svg'; 
import rectangle from 'images/rectangle.svg';

import css from './ContactItem.module.css';


export const ContactItem = ({ contacts }) => {
  //! DB contacts + length
  const contactsLength = contacts.length;

  //! arrFollowers - массив, наполняющий Local Storage дефолтными значениями = false
  let arrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    arrFollowers[i] = false;
  };

  //! Массив-Триггер со зачениями true/false в зависимости от сотояние кнопки
  //! Считываем значения true/false в Массив-Триггер из Local Storage
  //! Если Local Storage пустой, то записываем массив arrFollowers 
  const [arrTrigger, setArrTrigger] = useState(
    JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  );

  //! Дополнительный триггер (для перерендования)
  const [trigger, setTrigger] = useState(false); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //! Пишем в Local Storage весь Массив-Триггер (arrTrigger)
  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
    console.log("ЗАПИСЬ в Local Storage:", arrTrigger);

    const localStorageGet = JSON.parse(localStorage.getItem("ArrFollowers"))
    console.log("ЧТЕНИЕ из Local Storage:", localStorageGet); //!
  }, [arrTrigger]);

  // console.log("arrTrigger ПОСЛЕ:", arrTrigger); //!

    //! Логика работы кнопки FOLLOW/FOLLOWING 
    const toggleTrigger = (id) => {
      // console.log("id:", id); //!
      const idNumber = Number(id) - 1;
      // console.log("idNumber:", idNumber); //!

      // console.log(`toggleTrigger --> arrTrigger[${idNumber}]_ДО:`, arrTrigger[idNumber]); //!
      arrTrigger[idNumber] = !arrTrigger[idNumber];
      // console.log(`toggleTrigger --> arrTrigger[${idNumber}]_ПОСЛЕ:`, arrTrigger[idNumber]); //!

      setArrTrigger(arrTrigger);
      setTrigger(!trigger);
      localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
      return 
    }


  return (
    <>
      {contacts.map(({ id, user, tweets, followers }) => (
        <li
          key={id}
          className={css.card}>
            {/* //! logo */}
          <img className={css.logo}
              src={logo}
            alt=""
            width="76"
          />
          {/* //! picture */}
          <img className={css.picture}
                    src={picture}
                    alt="" width="308"
                />
          {/* //! avatar */}
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
