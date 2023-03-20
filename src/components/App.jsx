import { ContactItem } from './ContactItem/ContactItem.jsx';
import { OneCard } from './OneCard/OneCard.jsx'
import contacts from 'db/contacts.json';
import useLocalStorage from './hooks/useLocalStorage'; //?
import css from './App.module.css';

export const App = () => {
  const [triggerTask, setTriggerTask] = useLocalStorage("TriggerTask", false);
  console.log("triggerTask:", triggerTask); //!

  const toggleTriggerTask = () => {
    setTriggerTask(!triggerTask);
  };

  return (
    <div className={css.container}>
      <button
          type="button"
          className={triggerTask ? css.btnOneCard : css.btnManyCards}
          onClick={toggleTriggerTask}
      >
        {triggerTask ? "One card" : "Many cards"}
      </button>

      {!triggerTask && (
          <OneCard />
      )}

      {triggerTask && (
        <ul className={css.cardList}>
        <ContactItem contacts={contacts}/>
      </ul>
      )}
    </div>
  );
};
