// import {
//   useState,
//   useEffect
// } from 'react';

// import useLocalStorage from './hooks/useLocalStorage'; //?
// import useArrLocalStorage from './hooks/useArrLocalStorage'; //?

//! images
// import logo from 'images/logo.svg'; //?
// import { ReactComponent as Picture } from 'images/picture2.svg';
// import picture from 'images/picture2.svg'; //?
// import { ReactComponent as Avatar } from 'images/boy.svg';
// import avatar from 'images/boy.svg'; //?
// import rectangle from 'images/rectangle.svg'; //?

import {ContactItem} from './ContactItem/ContactItem.jsx';
//! DB contacts
import contacts from 'db/contacts.json';
import contacts2 from 'db/contacts2.json';

import css from './App.module.css';


export const App = () => {
  // const [start, setStart] = useState(0);
  // let start = 10;
  // console.log("start_ДО:", start); //!
  // useEffect(() => {
  //   setStart(false)
  // }, []);

  //! DB contacts
  // const contactsLength = contacts.length
  // console.log("contacts:", contacts); //!
  // console.log("contactsLength:", contactsLength); //!

  // const [trigger, setTrigger] = useLocalStorage("Followers", false);
  // console.log("trigger:", trigger); //!

  
  // let ArrFollowers = []
  // for (let i = 0; i < contactsLength; i += 1) {
  //   ArrFollowers[i] = false
  //     console.log(i);
  // };
  // console.log("ArrFollowers:", ArrFollowers); //!
  // const [arrTrigger, setArrTrigger] = useArrLocalStorage("ArrFollowers", ArrFollowers);
  // console.log("arrTrigger:", arrTrigger); //!

  //! Input data
  // const tweets = 777;
  // let followers = 100500;
  

  //! --------------- Преобразование 100500(100501) --> 100,500(100,501) ---------------
  // let followersString = followers.toString()
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

  // const toggleTrigger = () => {
  //   setTrigger(!trigger);
  // };


  //?----------------------------------------------------------------
  // const toggleTrigger = (id) => {

  //   setArrTrigger(!trigger);

  //   console.log("id:", id);
  //   const idNumber = Number(id) - 1;
  //   console.log("idNumber:", idNumber);

  //   if (trigger) {
  //     contacts[idNumber].followers = contacts[idNumber].followers - 1;
  //   } else {
  //     contacts[idNumber].followers = contacts[idNumber].followers + 1;
  //   };
  //   console.log(contacts[idNumber].followers);
  // };

  // console.log("start:", start); //!
  return (
    <>
      <ul className={css.cardList}>
        {/* <p>{start}</p> */}
        <ContactItem
          contacts={contacts}
          contacts2={contacts2}
          // start={start}
          // toggleTrigger={toggleTrigger}
        />
      </ul>
      
    </>
  );
};
