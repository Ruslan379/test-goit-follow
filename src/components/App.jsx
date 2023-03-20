import { ButtonTrigger } from './ButtonTrigger/ButtonTrigger.jsx';
import { OneCard } from './OneCard/OneCard.jsx';
import { CardItem } from './CardItem/CardItem.jsx';

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
      <ButtonTrigger
        trigger={triggerTask}
        toggleTrigger={toggleTriggerTask}
        textTrue={"One card"}
        textFalse={"Many cards"}
        inversionBackColor={true}
      />

      {!triggerTask && (
          <OneCard />
      )}

      {triggerTask && (
        <ul className={css.cardList}>
          <CardItem contacts={contacts}/>
        </ul>
      )}
    </div>
  );
};
