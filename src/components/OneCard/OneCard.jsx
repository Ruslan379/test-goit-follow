import useLocalStorage from '../hooks/useLocalStorage';
import { ButtonTrigger } from '../ButtonTrigger/ButtonTrigger.jsx';
import logo from 'images/logo.svg';
import { ReactComponent as Ellipse } from 'images/ellipse.svg';
import avatar from 'images/avatar.svg'; 
import rectangle from 'images/rectangle.svg'; 
import {
  Card,
  Logo,
  RoundFrameAvatar, 
  Avatar,
  Rectangle,
  Tweets,
  Followers
} from './OneCard.styled';

export const OneCard = () => {
  const [triggerOneCard, setTriggerOneCard] = useLocalStorage("TriggerOneCard", false);

  const tweets = 777;
  let followers = 100500;

  let followersString = followers.toString();
  if (triggerOneCard) {
    followers = followers + 1;
    followersString = followers.toString();
  };
  let followersRenderStart = followersString.slice(0, -3);
  let followersRenderEnd = followersString.slice(-3);
  
  const toggleTriggerOneCard = () => {
    setTriggerOneCard(!triggerOneCard);
  };

  return (
    <Card>
      <Logo
        alt="first logo"
        src={logo}
        width="76"
      />
      <Rectangle
        alt="rectangle"
        src={rectangle}
        width="380"
      />
      <RoundFrameAvatar>
        <Ellipse />
      </RoundFrameAvatar>
      <Avatar
        alt="avatar"
        src={avatar}
        width="63"
      />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>
        <span>{followersRenderStart},{followersRenderEnd}</span>
        &nbsp;FOLLOWERS
      </Followers>
      <ButtonTrigger
        trigger={triggerOneCard}
        toggleTrigger={toggleTriggerOneCard}
        textTrue={"FOLLOWING"}
        textFalse={"FOLLOW"}
        inversionBackColor={false}
      />
    </Card>
  );
};