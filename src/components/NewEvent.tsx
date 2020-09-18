import React, { useState } from 'react';
import { useClient } from '../context';
import { EventForm } from './EventForm/EventForm';

interface Props {
  updateEvents: () => void;
}

export const NewEvent: React.FC<Props> = ({ updateEvents }) => {
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [eventIcon, setEventIcon] = useState<any>(null);

  const client = useClient();

  const cleanForm = (): void => {
    setEventTitle('');
    setEventDate('');
    setEventIcon(null);
  };

  const onEventSaveCallback = (): void => {
    cleanForm();
    updateEvents();
  };

  const saveEvent = (): void => {
    const reqBody = {
      title: eventTitle,
      date: eventDate,
      icon: eventIcon,
    };

    client.newEvent(reqBody, () => onEventSaveCallback());
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEventTitle(e.target.value);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEventDate(e.target.value);
  };

  return (
    <EventForm
      submitForm={saveEvent}
      title={eventTitle}
      onChangeTitle={onChangeTitle}
      date={eventDate}
      onChangeDate={onChangeDate}
    />
  );
};
