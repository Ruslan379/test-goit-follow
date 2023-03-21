import { CardItem } from '../CardItem/CardItem.jsx';
import contacts from 'db/contacts.json';
import {
  CardsListContainer
} from './CardsList.styled.js';


export const CardsList = () => {
  return (
    <CardsListContainer>
          <CardItem contacts={contacts}/>
      </CardsListContainer>
  );
};
