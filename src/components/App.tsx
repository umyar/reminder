import React, { useCallback, useEffect, useState } from 'react';
import { useClient } from '../context';
import { Loader } from '../ui/Loader/Loader';
import { ActionsRow } from './ActionsRow/ActionsRow';
import { EditEvent } from './EditEvent';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { NewEvent } from './NewEvent';
import { Event } from '../api/schemas/Events/Event';

export const App: React.FC = () => {
  const [newEventFormIsOpened, setNewEventFormIsOpened] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventForEdit, setEventForEdit] = useState<Event | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [events, setEvents] = useState<Event[] | null>(null);

  const client = useClient();

  const getEvents = useCallback(() => {
    client.getEvents(res => setEvents(res));
  }, [client]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const toggleNewEventForm = (): void => {
    setNewEventFormIsOpened(prevValue => !prevValue);
  };

  const handleEditEvent = (): void => {
    // const event = events.find(event => event.id === eventId);
    //
    // if (event) {
    //   setEventForEdit(event);
    // }
    console.log('edit');
  };

  const handleDeleteEvent = (id: string): void => {
    client.deleteEvent(
      id,
      () => getEvents(),
      () => alert('Событие не найдено'),
    );
  };

  const actions = [
    { label: 'Добавить событие', action: () => toggleNewEventForm(), icon: <span>+</span> },
  ];

  return (
    <div>
      <Header />
      <ActionsRow actions={actions} />
      {newEventFormIsOpened ? (
        <NewEvent updateEvents={getEvents} />
      ) : eventForEdit ? (
        <EditEvent event={eventForEdit} updateEvents={getEvents} />
      ) : null}
      {events === null ? (
        <Loader />
      ) : (
        <EventList events={events} editEvent={handleEditEvent} deleteEvent={handleDeleteEvent} />
      )}
    </div>
  );
};
