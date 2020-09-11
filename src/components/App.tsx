import React, { useState } from 'react';
import { ActionsRow } from './ActionsRow/ActionsRow';
import { EventList } from './EventList/EventList';
import { NewEvent } from './NewEvent';

function App() {
  const [formIsOpened, setFormIsOpened] = useState<boolean>(false);

  const toggleNewEventForm = () => {
    setFormIsOpened(prevValue => !prevValue);
  };

  const actions = [
    { label: 'Добавить событие', action: () => toggleNewEventForm(), icon: <span>+</span> },
  ];

  return (
    <div>
      <h1>Напоминатель</h1>
      <ActionsRow actions={actions} />
      {formIsOpened && <NewEvent />}
      <EventList />
    </div>
  );
}

export default App;
