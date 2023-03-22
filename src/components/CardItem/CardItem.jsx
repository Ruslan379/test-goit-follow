import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';
import logo from 'images/logo.svg';
import { ReactComponent as Ellipse } from 'images/ellipse.svg'; 
import {
  Card,
  Logo,
  RoundFrameAvatar, 
  Avatar,
  HorizontalLine,
  UserName, 
  Tweets,
  Followers
} from './CardItem.styled';

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
        <Card key={id}>
          <Logo
            alt="first logo"
            src={logo}
            width="76"
          />
          <HorizontalLine />
          <RoundFrameAvatar>
            <Ellipse />
          </RoundFrameAvatar>
          <Avatar
            alt={user}
            src={avatar}
            width="63"
          />
          <UserName>{user}</UserName>
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