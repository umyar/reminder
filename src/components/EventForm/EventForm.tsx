import React from 'react';
import { EventBody } from '../../api/schemas/Events/Event';

interface Props extends EventBody {
  submitForm: () => void;
  onChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EventForm: React.FC<Props> = ({
  submitForm,
  title,
  onChangeTitle,
  date,
  onChangeDate,
  icon,
}) => {
  const onFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (title.trim().length > 1) {
      submitForm();
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" onChange={onChangeTitle} value={title} required />
      <input type="datetime-local" onChange={onChangeDate} value={date} required />
      <span>{icon}</span>
      <input type="submit" value="Сохранить" />
    </form>
  );
};
