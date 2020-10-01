import React, { useState } from 'react';
import { wrongDateMessage } from '../constants';
import { useClient } from '../context';
import { EventForm } from './EventForm/EventForm';

interface Props {
  updateEvents: () => void;
  closeForm: () => void;
}

export const NewEvent: React.FC<Props> = ({ updateEvents, closeForm }) => {
  const [eventTitle, setEventTitle] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');
  const [eventIcon, setEventIcon] = useState<any>(null);

  const client = useClient();

  const cleanForm = (): void => {
    setEventTitle('');
    setEventDate('');
    setEventIcon(null);
  };

  // TODO: Унифицировать закрытие формы и очистку данных
  const onCloseForm = (): void => {
    cleanForm();
    closeForm();
  };

  const onEventSaveCallback = (): void => {
    cleanForm();
    updateEvents();
  };

  const saveEvent = (): void => {
    if (eventDate.length > 16) {
      alert(wrongDateMessage);

      return;
    }

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
      closeForm={onCloseForm}
      submitForm={saveEvent}
      title={eventTitle}
      onChangeTitle={onChangeTitle}
      date={eventDate}
      onChangeDate={onChangeDate}
      submitButtonText="Добавить"
    />
  );
};
