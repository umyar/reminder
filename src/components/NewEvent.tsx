import React, { useState } from 'react';
import { EventForm } from './EventForm/EventForm';

export const NewEvent: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [icon, setIcon] = useState<any>(null);

  const saveEvent = () => {
    console.log(title, date);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <EventForm
        submitForm={saveEvent}
        title={title}
        onChangeTitle={onChangeTitle}
        date={date}
        onChangeDate={onChangeDate}
      />
    </div>
  );
};
