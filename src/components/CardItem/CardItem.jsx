import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';
import logo from 'images/logo.svg';
import {
  Card,
  Logo,
  Avatar,
  // UserName, //! Not used
  Tweets,
  Followers
} from './CardItem.styled';

export const CardItem = ({ contacts }) => {
  const contactsLength = contacts.length;

  const arrFollowers = [];
  for (let i = 0; i < contactsLength; i += 1) {
    arrFollowers[i] = false;
  };

  const [arrTrigger, setArrTrigger] = useState(
    JSON.parse(localStorage.getItem("ArrFollowers")) ?? arrFollowers
  );

  useEffect(() => {
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
  }, [arrTrigger]);

  const toggleTrigger = (id) => {
    const idNumber = Number(id) - 1;
    arrTrigger[idNumber] = !arrTrigger[idNumber];

    setArrTrigger([...arrTrigger]);
    
    localStorage.setItem("ArrFollowers", JSON.stringify(arrTrigger));
    return 
  }

  return (
    <>
      {contacts.map(({ id, user, tweets, followers, avatar }) => (
        <Card key={id}>
          <Logo
            alt="first logo"
            src={logo}
            width="76"
          />
          <Avatar
            alt={user}
            src={avatar}
            width="62"
          />
          {/* <UserName>{user}</UserName> */}
          <Tweets>{tweets} tweets</Tweets>
          <Followers>
            <span>
              {followers.toString().slice(0, -3)},{arrTrigger[id - 1]
              ?
              (followers + 1).toString().slice(-3)
              :
              followers.toString().slice(-3)}
            </span>
              &nbsp;FOLLOWERS
          </Followers>
          <ButtonTrigger
            trigger={arrTrigger[id-1]}
            toggleTrigger={() => {toggleTrigger(id)}}
            textTrue={"FOLLOWING"}
            textFalse={"FOLLOW"}
            inversionBackColor={false}
          />
        </Card>
      ))}
    </>
  );
};

CardItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};