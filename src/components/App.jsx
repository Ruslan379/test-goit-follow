import {ContactItem} from './ContactItem/ContactItem.jsx';
import contacts from 'db/contacts.json';
import css from './App.module.css';

export const App = () => {

  return (
    <div className={css.container}>
      <ul className={css.cardList}>
        <ContactItem contacts={contacts}/>
      </ul>
    </div>
  );
};
