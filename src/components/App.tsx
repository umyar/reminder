import React, { useCallback, useEffect, useState } from 'react';
import { useClient } from '../context';
import { PlusSignIcon } from '../ui/icons/PlusIcon';
import { Loader } from '../ui/Loader/Loader';
import { ActionsRow } from './ActionsRow/ActionsRow';
import { EditEvent } from './EditEvent';
import { EventList } from './EventList/EventList';
import { Header } from './Header/Header';
import { NewEvent } from './NewEvent';
import { Event } from '../api/schemas/Events/Event';

export const App: React.FC = () => {
  const [newEventFormIsOpened, setNewEventFormIsOpened] = useState<boolean>(false);
  const [eventForEdit, setEventForEdit] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[] | null>(null);

  const client = useClient();

  const getEvents = useCallback(() => {
    client.getEvents(res => setEvents(res));
  }, [client]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const toggleEventForm = (): void => {
    setNewEventFormIsOpened(prevValue => !prevValue);
  };

  const handleEditEvent = (id: string): void => {
    const eventToEditForm = events!.find(event => event.id === id);

    if (eventToEditForm) {
      setNewEventFormIsOpened(false);
      setEventForEdit(eventToEditForm);
    }
  };

  const cancelEventEdit = (): void => {
    setEventForEdit(null);
  };

  const handleDeleteEvent = (id: string): void => {
    if (eventForEdit && eventForEdit.id === id) {
      setEventForEdit(null);
    }

    client.deleteEvent(
      id,
      () => getEvents(),
      () => alert('Событие не найдено'),
    );
  };

  const actions = [
    { label: 'Добавить событие', action: () => toggleEventForm(), icon: <PlusSignIcon /> },
  ];

  // TODO: добавить индикатор редактирования/disable события в список (или убирать из списка)

  return (
    <>
      <Header />
      <ActionsRow actions={actions} />
      {newEventFormIsOpened ? (
        <NewEvent updateEvents={getEvents} closeForm={toggleEventForm} />
      ) : eventForEdit ? (
        <EditEvent
          event={eventForEdit}
          updateEvents={getEvents}
          cancelEventEdit={cancelEventEdit}
        />
      ) : null}
      {events === null ? (
        <Loader />
      ) : (
        <EventList events={events} editEvent={handleEditEvent} deleteEvent={handleDeleteEvent} />
      )}
    </>
  );
};
