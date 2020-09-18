import React, { useState } from 'react';
import { useClient } from '../context';
import { EventForm } from './EventForm/EventForm';
import { Event } from '../api/schemas/Events/Event';

interface Props {
  event: Event;
  updateEvents: () => void;
}

export const EditEvent: React.FC<Props> = ({ event: { id, title, date, icon }, updateEvents }) => {
  const [eventTitle, setEventTitle] = useState<string>(title);
  const [eventDate, setEventDate] = useState<string>(date);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventIcon, setEventIcon] = useState<any>(icon);

  const client = useClient();

  const cleanForm = (): void => {
    setEventTitle('');
    setEventDate('');
    setEventIcon(null);
  };

  const onEventEditCallback = (): void => {
    cleanForm();
    updateEvents();
  };

  const updateEvent = (): void => {
    const reqBody = {
      title: eventTitle,
      date: eventDate,
      icon: eventIcon,
    };

    client.editEvent(id, reqBody, () => onEventEditCallback());
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEventTitle(e.target.value);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEventDate(e.target.value);
  };

  return (
    <EventForm
      submitForm={updateEvent}
      title={eventTitle}
      onChangeTitle={onChangeTitle}
      date={eventDate}
      onChangeDate={onChangeDate}
    />
  );
};
