import { ButtonTrigger } from './ButtonTrigger/ButtonTrigger.jsx';
import { OneCard } from './OneCard/OneCard.jsx';
import { CardsList } from './CardsList/CardsList.jsx';

import useLocalStorage from './hooks/useLocalStorage'; //?

import {
  Container
} from './App.styled';

export const App = () => {
  const [triggerTask, setTriggerTask] = useLocalStorage("TriggerTask", false);

  const toggleTriggerTask = () => {
    setTriggerTask(!triggerTask);
  };

  return (
    <Container>
      <ButtonTrigger
        trigger={triggerTask}
        toggleTrigger={toggleTriggerTask}
        textTrue={"One card"}
        textFalse={"Cards list"}
        inversionBackColor={true}
      />
      {triggerTask ? <CardsList /> : <OneCard />}
    </Container>
  );
};
